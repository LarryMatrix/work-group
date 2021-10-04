import {
  HttpErrorResponse,
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
  HttpResponse,
} from "@angular/common/http";
import {Injectable} from "@angular/core";
import {Observable} from "rxjs";
import {retry, tap} from "rxjs/operators";

@Injectable()
export class HttpInterceptorService implements HttpInterceptor {
  constructor(){}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler,
  ): Observable<HttpEvent<any>>{
    return next
      .handle(
        req.clone({
          setHeaders: {
            "Content-Type": "application/json",
            "Accept": "application/json",
            "Authorization": `Basic ${btoa("massanjal4:PhoneField1!")}`,
          },
        }),
      )
      .pipe(
        retry(2),
        tap(
          (event: HttpEvent<any>) => {
            if(event instanceof HttpResponse){
              console.log('do nothing');
            }
          },
          (error: any) => {
            if(error instanceof HttpErrorResponse){
              if(error.status === 401){
                console.log("Interceptor error 401: ", error);
              }else if(error.status === 400){
                console.log("Interceptor error 400: ", error);
              }
            }else{
              console.log("Interceptor general error: ", error);
            }
          },
        ),
      );
  }
}

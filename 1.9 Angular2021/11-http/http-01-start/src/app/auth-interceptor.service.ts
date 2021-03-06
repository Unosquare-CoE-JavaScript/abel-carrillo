import {
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from "@angular/common/http";

export class AuthInterceptorService implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler) {
   // console.log("Request is on its way");
    const modifiedReq = req.clone({
      headers: req.headers.append("Auth", "asd"),
    });
    return next.handle(modifiedReq);
  }
}

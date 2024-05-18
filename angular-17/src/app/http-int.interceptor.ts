import { HttpInterceptorFn } from '@angular/common/http';
import { environment } from '../environments/environment';environment

export const httpIntInterceptor: HttpInterceptorFn = (req, next) => {
  console.log("httpIntInterceptor",req);  
  let new_req = req.clone({setHeaders:{"user_id":"asfdw","role":"admin"}});
  return next(new_req);
};

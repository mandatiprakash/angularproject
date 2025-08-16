import { HttpInterceptorFn } from '@angular/common/http';
import { AuthService } from '../service/auth.service';
import { inject } from '@angular/core';

export const serverInterceptor: HttpInterceptorFn = (req, next) => {

  let authService = inject(AuthService);

  console.log(req);

  if (authService.currentUser != undefined) {

     req = req.clone({ headers: req.headers.append("Authorization", "Bearer " + authService.currentUser?.token)
      .append("pradeep","shet")
     });
  }

  return next(req);
};

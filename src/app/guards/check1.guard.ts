import { CanActivateChildFn, Router } from '@angular/router';
import { AuthService } from '../service/auth.service';
import { inject } from '@angular/core';

export const check1Guard: CanActivateChildFn = (childRoute, state) => {

  let authService = inject(AuthService);
  let router = inject(Router);

  if (authService.currentUser === undefined) {
    router.navigate(['login']);
    return false
  }
  else {
    return true;
  }
};

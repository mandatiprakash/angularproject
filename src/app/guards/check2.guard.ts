import { inject } from '@angular/core';
import { CanMatchFn } from '@angular/router';
import { AuthService } from '../service/auth.service';

export const check2Guard: CanMatchFn = (route, segments) => {
  let authService = inject(AuthService);

  return authService.authenticate();
};

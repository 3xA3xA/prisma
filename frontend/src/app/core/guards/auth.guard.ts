import { inject } from '@angular/core';
import { CanActivateFn, Router, ActivatedRouteSnapshot } from '@angular/router';
import { AuthService } from '../services/auth.service';

export const authGuard: CanActivateFn = (route: ActivatedRouteSnapshot) => {
  const auth   = inject(AuthService);
  const router = inject(Router);

  if (auth.isLoggedIn()) return true;

  // Запоминаем куда хотел попасть пользователь
  router.navigate(['/login'], {
    state: { returnUrl: '/' + route.url.join('/') }
  });

  return false;
};
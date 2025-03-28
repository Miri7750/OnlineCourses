import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const authGuardGuard: CanActivateFn = (route, state) => {

  const router = inject(Router)

  const isLoggedIn= sessionStorage.getItem('token');

  if (!isLoggedIn) {
    router.navigate(['/auth']);
    return false;
  }
  return true;

};

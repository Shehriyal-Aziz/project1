import { inject } from '@angular/core';
import { CanActivateFn } from '@angular/router';
import { Router } from '@angular/router';
export const authGuard: CanActivateFn = (route, state) => {
  let router = inject(Router);
  const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
  if (!isLoggedIn) {
    return false;
  }else{
    router.navigateByUrl('/login');
    return true;
    
  }
  
};

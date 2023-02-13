import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, Router} from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CheckRolGuard implements CanActivate {
  constructor(private router: Router){}

  canActivate(activeRouter: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | boolean{
    return this.checkRol(state);
  }
  checkRol(state: RouterStateSnapshot):boolean{
    const localitem: string | any = localStorage.getItem('user');
    const user = JSON.parse(localitem);

    var regexp: RegExp = /user\S?/;

    if(state.url.match(regexp) && (user.rol == 'administrator')){
      return true;
    }

    this.router.navigate(['/home']);
    return false;
  }
}

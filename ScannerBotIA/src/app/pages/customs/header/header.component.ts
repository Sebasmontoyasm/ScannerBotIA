import { Component } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { MatDialog} from '@angular/material/dialog';
import { AuthService } from 'src/app/services/auth/auth.service';
import { SigninComponent } from '../../signin/signin.component';
import { ChangepswdComponent } from '../../user/changepswd/changepswd.component';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  rol = "guest";
  isLogged = false;

  private destroy = new Subject<any>();

  constructor(private singin: MatDialog,
              private chpassword: MatDialog,
              private authService: AuthService) { }

  ngOnInit(): void {
    this.authService.isLogged.pipe(
      takeUntil(this.destroy)
    ).subscribe((res) => (this.isLogged = res));
    this.authService.isRol.pipe(
      takeUntil(this.destroy)
    ).
      subscribe((res) => (this.rol = res));
  }

  ngOnDestroy(): void {
    this.destroy.next({});
    this.destroy.complete();
  }

  onSinginout(): void{
    this.authService.loginout();
  }

  closeSingIn(){
    this.singin.closeAll();
  }

  closeChangePass(){
    this.chpassword.closeAll();
  }

  openSingIn(enterAnimationDuration: string, exitAnimationDuration: string): void {
    this.singin.open(SigninComponent, {
    position: {top: '130px'},
    width: '30%',
    height: '60%',
    enterAnimationDuration,
    exitAnimationDuration
  });
  }

  openChangePass(enterAnimationDuration: string, exitAnimationDuration: string): void {
    this.chpassword.open(ChangepswdComponent, {
    position: {top: '130px'},
    width: '30%',
    height: '60%',
    enterAnimationDuration,
    exitAnimationDuration
  });
  }
}



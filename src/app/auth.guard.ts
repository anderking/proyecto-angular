import { Injectable } from '@angular/core';
import { CanActivate, CanActivateChild, ActivatedRouteSnapshot, RouterStateSnapshot, Router  } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './services/auth.service';
import { User } from './models/user';
import { UserService } from './services/user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate, CanActivateChild {

  public user: User;

  constructor
  (
  	private _authService: AuthService,
    private _router: Router,
    private _userService: UserService,
    )
  {
    //this.getUser(localStorage.getItem('resID'));

  }

  canActivate(): boolean {
    if (this._authService.loggedIn()) {
      return true
    } else {
      this._router.navigate(['/login'])
      return false
    }
  }

/*  getUser(id)
  {
    this._userService.getUser(id).subscribe
    (
      response =>
      {
        this.user = response.user;
        console.log(this.user);
      },
      error =>
      {
        console.log(<any>error);
      }
      )
  }*/

  canActivateChild(): boolean {
    if (this.user.tipo=="admin") {
      console.log("client true");
      return true
    } else {
      console.log("client true");
      this._router.navigate(['**'])
      return false
    }
  }

}

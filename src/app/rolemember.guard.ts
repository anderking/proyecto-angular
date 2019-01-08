
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router  } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './services/auth.service';
import { User } from './models/user';
import { UserService } from './services/user.service';

@Injectable({
  providedIn: 'root'
})
export class RolememberGuard implements CanActivate {

  public user: User;

  constructor
  (
  	private _authService: AuthService,
    private _router: Router,
    private _userService: UserService,
  )
  {
    this.getUser(localStorage.getItem('resID'));
  }

  getUser(id)
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
    );
  }

  canActivate(): boolean
  {
    if(this.user)
    {
      if(this.user.tipo=="admin")
      {
        return true
      }
    }
    else
    {
      this._router.navigate(['/restringido'])
      return false
    }
  }

}

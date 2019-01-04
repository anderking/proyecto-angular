import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { UserService } from '../../services/user.service';

import { User } from '../../models/user';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';
import { Router, ActivatedRoute, Params } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers:[AuthService,UserService]
})
export class LoginComponent implements OnInit {
	public user : User;
  public email:string;
  public password:string;
  public resID:string;

  constructor
  (
    public afAuth: AngularFireAuth,
    private _router: Router,
    private authService: AuthService,
    private userService: UserService
   )
  {
  }

  ngOnInit() {

  }
  
  login() {
     this.authService.login(this.email,this.password).subscribe(
      res =>
      {   
        this.resID = res.user[0]._id;
        localStorage.setItem('token',res.token);
        //this.loginRedirect();
      },
      err => {
        console.log(err);
      }
    );
  }

  loginGoogle() {
    this.authService.loginGoogleUser()
      .then
      (
        (res) =>
        {
          console.log('resUser: ', res);
          this.loginRedirect();
        }
      ).catch
      (
        err => console.log('Error: ',err.message)
      );
  }

  loginFacebook() {
    this.authService.loginFacebookUser()
      .then
      (
        (res) =>
        {
          console.log('resUser: ', res);
          this.loginRedirect();
        }
      ).catch
      (
        err => console.log('Error: ',err.message)
      );
  }

  logout() {
    this.authService.logoutUser();
  }

  loginRedirect(){
    this._router.navigate(['/user/'+this.resID+'']);
  }

}

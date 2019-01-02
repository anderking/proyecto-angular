import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { User } from '../../models/user';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';
import { Router, ActivatedRoute, Params } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  //providers:[AuthService]
})
export class LoginComponent implements OnInit {
	public user : User;
  public email:string;
  public password:string;

  constructor
  (
    public afAuth: AngularFireAuth,
    private _router: Router,
    private authService: AuthService
   )
  {
      this.user = new User('','','','','','','');
  }

  ngOnInit() {
  }
  
  login() {
    console.log(this.email,this.password);
    this.authService.loginEmailUser(this.email,this.password)
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
    this._router.navigate(['/user/5c2bdb75a977691b5c41ec26']);
  }

}

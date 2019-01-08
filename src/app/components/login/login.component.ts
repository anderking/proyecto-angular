import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { UserService } from '../../services/user.service';
import { HttpErrorResponse } from '@angular/common/http';
import { User } from '../../models/user';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

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
  public url:string;

  constructor
  (
    public afAuth: AngularFireAuth,
    private _router: Router,
    private authService: AuthService,
    private userService: UserService,
    private toastr: ToastrService
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
        localStorage.setItem('resID', res.user[0]._id);
        this.loginRedirect();
      },
      err => {
        if(err instanceof HttpErrorResponse){
          if(err.status===404){
            this.toastr.error(err.error.message, 'Error!');
            //alert(err.error.message);
          }
        }
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

  loginRedirect(){
    this._router.navigate(['/spinner/']);
    //window.location.replace('http://localhost:4200/spinner/');
  }

}

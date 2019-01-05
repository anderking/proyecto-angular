import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { User } from '../../models/user';
import { UserService } from '../../services/user.service';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  providers: [UserService]
})
export class RegisterComponent implements OnInit {
	
	public user : User;
	public email:string;
	public password:string;
	public resID:string;
	
	constructor
	(
		private _router: Router,
		private authService: AuthService,
		private _userService: UserService
	)
	{
	}

	ngOnInit() {
	}

  register() {
     this.authService.register(this.email,this.password).subscribe(
      res =>
      {   
        this.resID = res.user._id;
        localStorage.setItem('token',res.token);
        localStorage.setItem('resID', res.user._id);
        this.loginRedirect();
      },
      err => {
        if(err instanceof HttpErrorResponse){
          if(err.status===404){
            alert(err.error.message);
          }
        }
      }
    );
  }
	
	loginRedirect(){
    	//this._router.navigate(['/user/'+this.resID+'']);
      window.location.replace('http://localhost:4200/user/'+this.resID);
  	}

}

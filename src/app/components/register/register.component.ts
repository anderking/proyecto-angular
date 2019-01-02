import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { User } from '../../models/user';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
	
	public user : User;
	public email:string;
	public password:string;
	
	constructor
	(
		private _router: Router,
		private authService: AuthService
	)
	{

	}

	ngOnInit() {
	}

	addUser()
	{
		console.log(this.email,this.password);
		this.authService.registerUser(this.email,this.password)
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
    	this._router.navigate(['/user/5c2bdb75a977691b5c41ec26']);
  	}
}

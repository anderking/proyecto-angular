import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { AngularFireAuth } from '@angular/fire/auth';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

	public isLogged:any;
	public resID:string;
	
	constructor
	(
		private afAuth: AngularFireAuth,
		private _authService: AuthService,
		private _router: Router
	)
	{
	}

	ngOnInit() {
		this._authService.logoutUser();

	    if ( localStorage.getItem('resID') )
	    {
	      console.log(localStorage.getItem('resID'));
	      this.resID = localStorage.getItem('resID');
	    }
	    else
	    {
	      console.log('resID dose not exists');
	      this._authService.logoutUserToken();
	      this._authService.logoutUserResID();
	    }

	}

	getCurrentUser()
	{
		this._authService.isAuth().subscribe
		(
			response =>
			{
				if(response){
					console.log('LOGEADO');
					this.isLogged = "true";
				}
				else
				{
					console.log('NO LOGEADO');
					this.isLogged = "false";	
				}
			},
			error =>
			{
				console.log(<any>error);
			}
		)
	}

}

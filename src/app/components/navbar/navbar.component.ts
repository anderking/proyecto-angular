import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { AngularFireAuth } from '@angular/fire/auth';
import { HttpErrorResponse } from '@angular/common/http';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { UserService } from '../../services/user.service';
import { User } from '../../models/user'; //Importo el modelo

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
	
	public user: User;
	public isLogged:any;
	public resID:string;
	public tipo:string;
	public rutaActual:string;
	
	constructor
	(
		private afAuth: AngularFireAuth,
		private _authService: AuthService,
		private _router: Router,
		private _route: ActivatedRoute,

		private _userService: UserService,

	)
	{
		this.rutaActual = this._router.url;
		console.log(this.rutaActual)
	}

	ngOnInit()
	{
	    if ( localStorage.getItem('resID') )
	    {
	      this.resID = localStorage.getItem('resID');
	      this.getUser(this.resID);
	    }
	    else
	    {
	      console.log('resID dose not exists');
	      this._authService.logoutUserToken();
	      this._authService.logoutUserResID();
	    }

	}

	getUser(id)
	{
		this._userService.getUser(id).subscribe
		(
			response =>
			{
				this.tipo = response.user.tipo;
			},
			error =>
			{
				console.log(<any>error);
			}
		)
	}

}

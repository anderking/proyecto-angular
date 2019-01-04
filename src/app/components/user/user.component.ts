import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user'; //Importo el modelo
import { UserService } from '../../services/user.service';
import { Global } from '../../services/global';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
  providers:[UserService]
})
export class UserComponent implements OnInit {

	public user: User;

	constructor
	(
		private _userService: UserService,
		private _route: ActivatedRoute,
		private _router: Router,
		public afAuth: AngularFireAuth,
	)
	{
		
	}

	ngOnInit()
	{
		this._route.params.subscribe
		(
			params =>
			{
				let id = params.id;
				this.getUser(id);
			}
		);
		//this.logout();
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
		)
	}

  logout() {
    this.afAuth.auth.signOut();
    this._router.navigate(['/login']);
  }

}

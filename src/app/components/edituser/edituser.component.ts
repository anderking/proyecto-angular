import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user'; //Importo el modelo
import { UserService } from '../../services/user.service';
import { UploadService } from '../../services/upload.service';
import { Global } from '../../services/global';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-edituser',
  templateUrl: './edituser.component.html',
  styleUrls: ['./edituser.component.css'],
  providers:[UserService]

})
export class EdituserComponent implements OnInit {

	public user: User;
	public update_user;
	public status:string;

	constructor
	(
		private _userService: UserService,
		private _route: ActivatedRoute,
		private _router: Router
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

	onSubmit()
	{	// Guardar datos básicos
		this._userService.updateUser(this.user).subscribe
		(
			response =>
			{
				if(response.user)
				{
					this.update_user = response.user;
					this.status = 'success';
					this._router.navigate(['/perfil/'+this.user._id]);
					console.log(this.update_user);	
				}
				else
				{
					this.status = 'failed';
				}
			},
			error =>
			{
				console.log(<any>error);
			}
		);
	}

}

import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user'; //Importo el modelo
import { UserService } from '../../services/user.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';
import { AuthService } from '../../services/auth.service';
import { UploadService } from '../../services/upload.service';
import { Global } from '../../services/global';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
  providers:[UserService,UploadService]
})
export class UserComponent implements OnInit {

	public user: User;
	public rutaResID:string;
	public rutaActual:string;
	public filesToUpload: Array<File>;
	public url: string;

	constructor
	(
		private _userService: UserService,
		private _route: ActivatedRoute,
		private _router: Router,
		public afAuth: AngularFireAuth,
		private _authService: AuthService,
		private _uploadService: UploadService,

	)
	{
		this.rutaResID="/perfil/"+localStorage.getItem('resID');
		this.rutaActual = this._router.url;
		this.url = Global.url;
		
		
		
	}

	ngOnInit()
	{
		//this.logoutRedes();
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

	logoutRedes() {
		this.afAuth.auth.signOut();
	    this._router.navigate(['/login']);
	}
	
	logoutToken(){
	  	//this._authService.logoutUserToken();
	  	//this._authService.logoutUserResID();
	  	this._authService.logoutClear();
	  	this._router.navigate(['/login']);
	}

	onSubmit()
	{
		this._userService.updateUser(this.user).subscribe
		(
			response =>
			{
				if(response.user)
				{	
					if(this.filesToUpload)
					{
						this._uploadService.makeFileRequest(Global.url+"upload-image-user/"+response.user._id, [], this.filesToUpload, 'image')
						.then
						(
							(result:any) =>
							{
								this._router.navigate(['/perfil/'+this.user._id]);
							}
						);
					}
					else
					{
						this._router.navigate(['/perfil/'+this.user._id]);
					}
				}
			},
			error =>
			{
				console.log(<any>error);
			}
		);
	}

	fileChangeEvent(fileInput: any)
	{
		this.filesToUpload = <Array<File>>fileInput.target.files;
	}
}

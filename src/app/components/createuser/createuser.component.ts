import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-createuser',
  templateUrl: './createuser.component.html',
  styleUrls: ['./createuser.component.css']
})
export class CreateuserComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
/*
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
					this._router.navigate(['/user/'+this.update_user._id]);
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
	*/
}

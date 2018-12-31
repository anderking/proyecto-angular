import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  constructor() { 
//  this.user = new User('','','','','');
}

  ngOnInit() {
  }
	/*onSubmit(form)
	{	// Guardar datos básicos
		this._userService.saveUser(this.user).subscribe
		(
			response =>
			{
				if(response.user)
				{
					this.status = 'success';
					form.reset();
					console.log(this.user);	
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

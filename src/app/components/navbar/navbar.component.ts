import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

	public isLogged:boolean;
	
	constructor
	(
		private afAuth: AngularFireAuth,
		private authService: AuthService

	)
	{
	}

	ngOnInit() {
		this.getCurrentUser();
	}

	getCurrentUser()
	{
		this.authService.isAuth().subscribe
		(
			response =>
			{
				if(response){
					console.log('LOGEADO');
					this.isLogged = true;
				}
				else
				{
					console.log('NO LOGEADO');
					this.isLogged = false;	
				}
			},
			error =>
			{
				console.log(<any>error);
			}
		)
	}

}

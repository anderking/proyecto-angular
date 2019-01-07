import { Component, OnInit } from '@angular/core';
import { Project } from '../../models/project'; //Importo el modelo
import { ProjectService } from '../../services/project.service'; //Importo el servicio que tiene las funciones de crear
import { User } from '../../models/user'; //Importo el modelo
import { UserService } from '../../services/user.service';
import { Global } from '../../services/global'; // Para usar la conexion url de la api en este componente directamente
import { Router, ActivatedRoute, Params } from '@angular/router';//Para poder cargar las rutas


@Component({ 
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css'],
  providers:[ProjectService]
})
export class DetailComponent implements OnInit {
	
	public user: User;
	public url: string;
	public project: Project;
	public confirm: boolean;
	public resID:string;

	constructor
	(
		private _projectService: ProjectService,
		private _userService: UserService,
		private _router: Router,
		private _route: ActivatedRoute

	)
	{
		this.url = Global.url;
    	this.confirm = false;
		this.resID = localStorage.getItem('resID');
	}

	ngOnInit()
	{
		this._route.params.subscribe
		(
			params =>
			{
				let id = params.id;
				this.getProject(id);
			}
		);
		this.getUser(this.resID);

	}

	getProject(id)
	{
		this._projectService.getProject(id).subscribe
		(
			response =>
			{
				this.project = response.project;
			},
			error =>
			{
				console.log(<any>error);
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

	deleteProject(id){
		this._projectService.deleteProject(id).subscribe(
			response => {
				if(response.project){
					if(this.user.tipo=="member")
					{
						this._router.navigate(['/proyectos/'+this.user._id+'']);
					}

					if(this.user.tipo=="admin")
					{
						this._router.navigate(['/proyectos/']);
					}
				}
			},
			error => {
				console.log(<any>error);
			}
		);
	}

	setConfirm(confirm)
	{
		this.confirm = confirm;
	}


}

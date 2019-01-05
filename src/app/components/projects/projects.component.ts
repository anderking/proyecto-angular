import { Component, OnInit } from '@angular/core';
import { Project } from '../../models/project'; //Importo el modelo
import { ProjectService } from '../../services/project.service'; //Importo el servicio que tiene las funciones de crear
import { Global } from '../../services/global'; // Para usar la conexion url de la api en este componente directamente
import { Router, ActivatedRoute, Params } from '@angular/router';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
  providers:[ProjectService]
})
export class ProjectsComponent implements OnInit {
	public projects: any;
	public url:string;
	public total:number=0;
	public userID:string;
	public nameUser:string;

	constructor
	(
		private _projectService: ProjectService,
		private _userService: UserService,
		private _route: ActivatedRoute,

	)
	{
		this.url = Global.url;
		this.userID = localStorage.getItem('resID');
		console.log(this.userID);
	}
	ngOnInit()
	{
		this.getUser(this.userID);
		this.getProjectsAll();
	}

	getUser(id)
	{
		this._userService.getUser(id).subscribe
		(
			response =>
			{
				this.nameUser = response.user.name;
			},
			error =>
			{
				console.log(<any>error);
			}
		)
	}

	getProjectsAll()
	{
		this._projectService.getProjects().subscribe
		(
			response =>
			{
				console.log(response);
				if(response.projects)
				{
					this.projects = response.projects;
					console.log(this.projects);
					this.total = this.projects.length;
				}
			},
			error => 
			{
				console.log(error);
			}
		);
	}


}

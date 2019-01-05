import { Component, OnInit } from '@angular/core';
import { Project } from '../../models/project'; //Importo el modelo
import { ProjectService } from '../../services/project.service'; //Importo el servicio que tiene las funciones de crear
import { Global } from '../../services/global'; // Para usar la conexion url de la api en este componente directamente
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-projectsusers',
  templateUrl: './projectsusers.component.html',
  styleUrls: ['./projectsusers.component.css'],
  providers:[ProjectService]
})
export class ProjectsusersComponent implements OnInit {
	public projects: any;
	public url:string;
	public total:number=0;
	public userID:string;

	constructor
	(
		private _projectService: ProjectService,
		private _route: ActivatedRoute,

	)
	{
		this.url = Global.url;
		this.userID = localStorage.getItem('resID');
		console.log(this.userID);
	}
	ngOnInit() {
		this._route.params.subscribe
		(
			params =>
			{
				let id = params.id;
				console.log(id);
				this.getProjectsAll(id);
			}
		);
	}
	getProjectsAll(id){
		this._projectService.getProjectsUser(id).subscribe
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

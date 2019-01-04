import { Component, OnInit } from '@angular/core';
import { Project } from '../../models/project'; //Importo el modelo
import { ProjectService } from '../../services/project.service'; //Importo el servicio que tiene las funciones de crear
import { Global } from '../../services/global'; // Para usar la conexion url de la api en este componente directamente
import { Router, ActivatedRoute, Params } from '@angular/router';//Para poder cargar las rutas


@Component({ 
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css'],
  providers:[ProjectService]
})
export class DetailComponent implements OnInit {
	
	public url: string;
	public project: Project;
	public confirm: boolean;

	constructor
	(
		private _projectService: ProjectService,
		private _router: Router,
		private _route: ActivatedRoute

	)
	{
		this.url = Global.url;
    	this.confirm = false;
    	console.log(this.url);
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
		)
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
		)
	}

	deleteProject(id){
		this._projectService.deleteProject(id).subscribe(
			response => {
				if(response.project){
					this._router.navigate(['/proyectos']);
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

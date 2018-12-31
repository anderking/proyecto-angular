import { Component, OnInit } from '@angular/core';
import { Project } from '../../models/project'; //Importo el modelo
import { ProjectService } from '../../services/project.service'; //Importo el servicio que tiene las funciones de crear
import { Global } from '../../services/global'; // Para usar la conexion url de la api en este componente directamente

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
  providers:[ProjectService]
})
export class ProjectsComponent implements OnInit {
	
	public projects: Project;
	public url:string;
	public total:number=0;

	constructor
	(
		private _projectService: ProjectService
	)
	{
		this.url = Global.url;
	}

	ngOnInit() {
		this.getProjectsAll();
	}

	getProjectsAll(){
		this._projectService.getProjects().subscribe
		(
			response =>
			{
				if(response.projects)
				{
					this.projects = response.projects;
					console.log(this.projects);

				}
			},
			error => 
			{
				console.log(error);
			}
		);
	}
}

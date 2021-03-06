import { Component, OnInit } from '@angular/core';
import { Project } from '../../models/project'; //Importo el modelo
import { ProjectService } from '../../services/project.service'; //Importo el servicio que tiene las funciones de crear
import { UploadService } from '../../services/upload.service'; //Importo el servicio para poder subir imagenes
import { Global } from '../../services/global'; // Para usar la conexion url de la api en este componente directamente

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css'],
  providers: [ProjectService, UploadService]
})
export class CreateComponent implements OnInit {
	
	public title: string;
	public project: Project;
	public save_project;
	public status: string;
	public filesToUpload: Array<File>;
	public resID:string = localStorage.getItem('resID');


	constructor
	(
		private _projectService: ProjectService,
		private _uploadService: UploadService)
	{
		this.title = "Crear Proyecto Nuevo";
		this.project = new Project('','','','',2019,'','',this.resID);
		console.log(this.project);
	}

	ngOnInit()
	{

	}

	onSubmit(form)
	{	// Guardar datos básicos
		this._projectService.saveProject(this.project).subscribe
		(
			response =>
			{
				if(response.project)
				{	// Subir la imagen
					if(this.filesToUpload)
					{
						this._uploadService.makeFileRequest(Global.url+"upload-image-project/"+response.project._id, [], this.filesToUpload, 'image')
						.then
						(
							(result:any) =>
							{
								this.save_project = result.project;
								this.status = 'success';
								form.reset();
							}
						);
					}
					else
					{
						this.save_project = response.project;
						this.status = 'success';
						form.reset();
					}
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

	fileChangeEvent(fileInput: any)
	{
		this.filesToUpload = <Array<File>>fileInput.target.files;
	}

}

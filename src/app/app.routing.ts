// Importar modulos del router de angular
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';

// Importar componentes
import { ErrorComponent } from './components/error/error.component';

import { CreateComponent } from './components/create/create.component';
import { ProjectsComponent } from './components/projects/projects.component';

import { DetailComponent } from './components/detail/detail.component';
import { EditarComponent } from './components/editar/editar.component';

import { UserComponent } from './components/user/user.component';
import { UsersComponent } from './components/users/users.component';
import { CreateuserComponent } from './components/createuser/createuser.component';
import { EdituserComponent } from './components/edituser/edituser.component';
import { ProjectsusersComponent } from './components/projectsusers/projectsusers.component';
import { PerfilComponent } from './components/perfil/perfil.component';
import { MensajesComponent } from './components/mensajes/mensajes.component';
import { UsersshowComponent } from './components/usersshow/usersshow.component';
import { ProjectspadreComponent } from './components/projectspadre/projectspadre.component';

import { UserspadreComponent } from './components/userspadre/userspadre.component';
import { LoginspinnerComponent } from './components/loginspinner/loginspinner.component';


import { AuthGuard } from './auth.guard';
import { RoleGuard } from './role.guard';
import { RestringidoComponent } from './components/restringido/restringido.component';

// Array de rutas
const appRoutes: Routes = [

	{path: '', redirectTo: 'login', pathMatch: 'full'},
	{path: 'login', component: LoginComponent},
	{path: 'spinner', component: LoginspinnerComponent},
	{path: 'register', component: RegisterComponent},
	
	{path: 'perfil/:id', component: UserComponent, canActivate: [AuthGuard] ,
		children:
		[
			{path: '', component: PerfilComponent},
			{path: 'edit/:id', component: EdituserComponent},
		]

	},
	
	{path: 'proyectos', component: ProjectspadreComponent, canActivate: [AuthGuard],
		data: {id: localStorage.getItem('resID')},
		children:
		[
			{path: '', component: ProjectsComponent},
			{path: 'user/:id', component: ProjectsusersComponent},
			{path: 'show/:id', component: DetailComponent},
			{path: 'create', component: CreateComponent},
			{path: 'edit/:id', component: EditarComponent},
		]
	},
	
	{path: 'users', component: UserspadreComponent, canActivate: [AuthGuard], canActivateChild: [AuthGuard],
		data: {id: localStorage.getItem('resID')},
		children:
		[
			{path: '', component: UsersComponent},
			{path: 'show/:id', component: UsersshowComponent},
		]
	},
	
	{path: 'restringido', component: RestringidoComponent},
	{path: '**', component: ErrorComponent},

];

// Exportar el modulo del router
export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
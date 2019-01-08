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
			{path: '', component: PerfilComponent, canActivate: [AuthGuard]},
			{path: 'edit/:id', component: EdituserComponent, canActivate: [AuthGuard]},
		]

	},
	
	{path: 'proyectos', component: ProjectspadreComponent, canActivate: [],
		children:
		[
			{path: '', component: ProjectsComponent, canActivate: [AuthGuard],canActivateChild: [AuthGuard]},
			{path: 'user/:id', component: ProjectsusersComponent, canActivate: [AuthGuard]},
			{path: 'show/:id', component: DetailComponent, canActivate: [AuthGuard]},
			{path: 'create', component: CreateComponent, canActivate: [AuthGuard,RoleGuard]},
			{path: 'edit/:id', component: EditarComponent, canActivate: [AuthGuard,RoleGuard]},
		]
	},
	
	{path: 'users', component: UserspadreComponent, canActivate: [AuthGuard],
		children:
		[
			{path: '', component: UsersComponent, canActivate: [AuthGuard,RoleGuard]},
			{path: 'show/:id', component: UsersshowComponent, canActivate: [AuthGuard,RoleGuard]},
		]
	},
	
	{path: 'restringido', component: RestringidoComponent},
	{path: '**', component: ErrorComponent},

];

// Exportar el modulo del router
export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
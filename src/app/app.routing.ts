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



import { AuthGuard } from './auth.guard';

// Array de rutas
const appRoutes: Routes = [

	{path: '', redirectTo: 'login', pathMatch: 'full'},
	{path: 'login', component: LoginComponent},
	{path: 'register', component: RegisterComponent},
	
	{path: 'perfil/:id', component: UserComponent, canActivate: [AuthGuard] ,
		children:
		[
			{path: 'edit/:id', component: EdituserComponent, canActivate: [AuthGuard]},
		]

	},
	
	{path: 'proyectos', component: ProjectsComponent, canActivate: [AuthGuard],
		children:
		[
			{path: 'user/:id', component: ProjectsusersComponent, canActivate: [AuthGuard]},
			{path: 'show/:id', component: DetailComponent, canActivate: [AuthGuard]},
			{path: 'create', component: CreateComponent, canActivate: [AuthGuard]},
			{path: 'edit/:id', component: EditarComponent, canActivate: [AuthGuard]},
		]
	},
	
	{path: 'users', component: UsersComponent, canActivate: [AuthGuard],
		children:
		[
			{path: 'show/:id', component: UsersshowComponent, canActivate: [AuthGuard]},
		]
	},
	
	{path: '**', component: ErrorComponent}

];

// Exportar el modulo del router
export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
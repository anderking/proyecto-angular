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

import { AuthGuard } from './auth.guard';

// Array de rutas
const appRoutes: Routes = [

	{path: '', component: LoginComponent},
	{path: 'login', component: LoginComponent},
	{path: 'register', component: RegisterComponent},
	
	{path: 'proyectos', component: ProjectsComponent, canActivate: [AuthGuard]},
	{path: 'proyectos/:id', component: ProjectsusersComponent, canActivate: [AuthGuard]},
	{path: 'proyecto/:id', component: DetailComponent, canActivate: [AuthGuard]},
	{path: 'crear-proyectos', component: CreateComponent, canActivate: [AuthGuard]},
	{path: 'editar-proyecto/:id', component: EditarComponent, canActivate: [AuthGuard]},
	
	{path: 'users', component: UsersComponent, canActivate: [AuthGuard]},
	{path: 'user/:id', component: UserComponent, canActivate: [AuthGuard]},
	{path: 'crear-users', component: CreateuserComponent, canActivate: [AuthGuard]},
	{path: 'editar-user/:id', component: EdituserComponent, canActivate: [AuthGuard]},
	
	{path: '**', component: ErrorComponent}

];

// Exportar el modulo del router
export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
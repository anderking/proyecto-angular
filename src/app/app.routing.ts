// Importar modulos del router de angular
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Importar componentes
import { ErrorComponent } from './components/error/error.component';
import { AboutComponent } from './components/about/about.component';

import { CreateComponent } from './components/create/create.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { DetailComponent } from './components/detail/detail.component';
import { EditarComponent } from './components/editar/editar.component';

import { UserComponent } from './components/user/user.component';
import { UsersComponent } from './components/users/users.component';
import { CreateuserComponent } from './components/createuser/createuser.component';
import { EdituserComponent } from './components/edituser/edituser.component';
// Array de rutas
const appRoutes: Routes = [
	{path: '', component: AboutComponent},
	{path: 'sobre-mi', component: AboutComponent},
	
	{path: 'proyectos', component: ProjectsComponent},
	{path: 'proyecto/:id', component: DetailComponent},
	{path: 'crear-proyectos', component: CreateComponent},
	{path: 'editar-proyecto/:id', component: EditarComponent},
	
	{path: 'users/', component: UsersComponent},
	{path: 'user/:id', component: UserComponent},
	{path: 'crear-users', component: CreateuserComponent},
	{path: 'editar-user/:id', component: EdituserComponent},
	
	{path: '**', component: ErrorComponent}
];

// Exportar el modulo del router
export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
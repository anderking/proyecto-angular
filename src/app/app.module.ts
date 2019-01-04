import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { routing,appRoutingProviders } from './app.routing';//Para poder cargar las rutas
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';//Para las peticioens ajax
import { FormsModule, ReactiveFormsModule } from '@angular/forms';// para los formularios
import { environment } from '../environments/environment';
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFireAuth } from '@angular/fire/auth';
import { AuthService } from './services/auth.service';
import { UserService } from './services/user.service';
import { TokenInterceptorService } from './services/token-interceptor.service';
import { EventService } from './services/event.service';


import { AppRoutingModule } from './app-routing.module';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { AppComponent } from './app.component';
import { AboutComponent } from './components/about/about.component';
import { CreateComponent } from './components/create/create.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { ErrorComponent } from './components/error/error.component';
import { DetailComponent } from './components/detail/detail.component';
import { EditarComponent } from './components/editar/editar.component';
import { UserComponent } from './components/user/user.component';
import { UsersComponent } from './components/users/users.component';
import { EdituserComponent } from './components/edituser/edituser.component';
import { CreateuserComponent } from './components/createuser/createuser.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { EventsComponent } from './components/events/events.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    CreateComponent,
    ProjectsComponent,
    ErrorComponent,
    DetailComponent,
    EditarComponent,
    UserComponent,
    UsersComponent,
    EdituserComponent,
    CreateuserComponent,
    LoginComponent,
    RegisterComponent,
    NavbarComponent,
    EventsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    routing,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.fireBaseConfig),
    AngularFireDatabaseModule
  ],
  providers:
  [
    appRoutingProviders,
    AngularFireAuth,
    AuthService,
    UserService,
    EventService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass : TokenInterceptorService,
      multi: true
    },
    
   ],
  bootstrap: [AppComponent]
})
export class AppModule { }
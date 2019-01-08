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

import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxSpinnerModule } from 'ngx-spinner';

import { AppRoutingModule } from './app-routing.module';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { AppComponent } from './app.component';
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
import { ProjectsusersComponent } from './components/projectsusers/projectsusers.component';
import { PerfilComponent } from './components/perfil/perfil.component';
import { MensajesComponent } from './components/mensajes/mensajes.component';
import { UsersshowComponent } from './components/usersshow/usersshow.component';
import { ProjectspadreComponent } from './components/projectspadre/projectspadre.component';
import { UserspadreComponent } from './components/userspadre/userspadre.component';
import { LoginspinnerComponent } from './components/loginspinner/loginspinner.component';
import { RestringidoComponent } from './components/restringido/restringido.component';


@NgModule({
  declarations: [
    AppComponent,
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
    ProjectsusersComponent,
    PerfilComponent,
    MensajesComponent,
    UsersshowComponent,
    ProjectspadreComponent,
    UserspadreComponent,
    LoginspinnerComponent,
    RestringidoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    routing,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.fireBaseConfig),
    AngularFireDatabaseModule,
    BrowserAnimationsModule,
    NgxSpinnerModule,
    ToastrModule.forRoot({
      timeOut: 5000,
      positionClass: 'toast-bottom-right',
      preventDuplicates: true,
      closeButton:true
    })
  ],
  providers:
  [
    appRoutingProviders,
    AngularFireAuth,
    AuthService,
    UserService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass : TokenInterceptorService,
      multi: true
    },
    
   ],
  bootstrap: [AppComponent]
})
export class AppModule { }
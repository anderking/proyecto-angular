import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { User } from '../models/user';
import { Global } from './global';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';
import { map } from 'rxjs/operators';
 
@Injectable({
	providedIn: 'root'
})
export class AuthService{
	public url:string;

	constructor
	(
		public afAuth: AngularFireAuth,
		private _http: HttpClient
	)
	{
		this.url = Global.url;
	}

	registerUser(email:string, password:string)
	{
		return new Promise
		(
			(resolve, reject) =>
			{
				this.afAuth.auth.createUserWithEmailAndPassword(email,password)
					.then(
						userData => resolve(userData),
						err => reject(err)
					);
		});
	}

	loginEmailUser(email:string, password:string)
	{
		return new Promise
		(
			(resolve, reject) =>
			{
				this.afAuth.auth.signInWithEmailAndPassword(email,password)
					.then(
						userData => resolve(userData),
						err => reject(err)
					);
		});
	}

	loginGoogleUser(){
		return this.afAuth.auth.signInWithPopup(new auth.GoogleAuthProvider());
	}
	loginFacebookUser(){
    	return this.afAuth.auth.signInWithPopup(new auth.FacebookAuthProvider());
	}


	logoutUser(){
		return this.afAuth.auth.signOut();
	}

	isAuth(){
		return this.afAuth.authState.pipe(map(auth=> auth));
	}

	login(email:string, password:string): Observable<any>
	{
	    return this._http.post(this.url+'signin', { email: email, password: password });     
  	}

  	register(email:string, password:string): Observable<any>
	{
	    return this._http.post(this.url+'signup', { email: email, password: password });     
  	}
  logoutUser2() {
    localStorage.removeItem('token');
  }

  getToken() {
    return localStorage.getItem('token');
  }

  loggedIn() {
    return !!localStorage.getItem('token');
}
  
}
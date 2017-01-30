import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Subject } from "rxjs";

import { User } from "./user.interface";

declare var firebase: any;

@Injectable()
export class AuthService {

  constructor (private router: Router) {}

  signupUser(user: User) {
    firebase.auth().createUserWithEmailAndPassword(user.email, user.password)
      .catch(function(error) {
        console.log(error)
      });
  }

  signinUser(user: User) {
    firebase.auth().signInWithEmailAndPassword(user.email, user.password)
      .catch(function(error) {
        console.log(error);
      });
  }

  logout() {
    firebase.auth().signOut();
    this.router.navigate(['/signin']);
  }

  isAuthenticated() {
    const state = new Subject<boolean>();
    firebase.auth().onAuthStateChanged(function(user) {
      if (user) {
        state.next(true);
      } else {
        state.next(false);
      }
    });
    return state.asObservable();
  }

  getApiToken(){
    /*firebase.auth().onAuthStateChanged(function(user) {
      if (user) {
        user.getToken().then(function(data) {
          console.log(data);
          return data;
        });
      }
    });
    return null;*/
    /*firebase.auth().onAuthStateChanged(function(user) {
      if (user) {
        user.getToken().then(function(data) {
          //console.log(data);
          return 'abc';
        });
      } else {
        return 'kein user'
      }
    });*/

    firebase.auth().currentUser.getToken().then(function(data) {
      console.log(data);
      return 'test';
    });

    /*return firebase.auth().currentUser.getToken().then(function(data) {
      console.log(data);
      apiKey = data;
      return apiKey;
    });*/

    /*user.getToken().then(function(data) {
      console.log(data);
      return data;
    });*/

  }
}

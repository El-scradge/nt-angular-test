import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs';

export interface User {
  username: string;
  password: string;
}

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  allowedUsers = [
    {username: 'Jimbob', password: 'testing'},
    {username: 'Dave', password: 'Passw0rd'}
  ];

  private loggedIn$ = new BehaviorSubject<any>({username: null});

  constructor() { }

  get loggedIn() {
    return this.loggedIn$;
  }

  set loggedIn(value) {
    this.loggedIn$.next(value);
  }

  loginAction(data: User) {
    const loggingInUser = this.allowedUsers.find( element => element.username === data.username);
    if (loggingInUser) {
      if (loggingInUser.password === data.password) {
        return 'authorised';
      } else {
        return 'your username or password is not correct';
      }
    } else {
      return 'your username or password is not correct';
    }

  }
}

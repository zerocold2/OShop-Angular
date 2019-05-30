import { Component } from "@angular/core";
import { AuthService } from "shared/services/auth.service";
import * as firebase from 'firebase';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private authService: AuthService) { }

  login() {
    this.authService.login(new firebase.auth.GoogleAuthProvider());
  }
}
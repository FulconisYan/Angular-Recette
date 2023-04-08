import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {


  backButtonEvent() {
    console.log("Tu viens d'appuyer sur le bouton de retour");
  }
}

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'front';
  users = [];
  user = true;;

  getUserCount(){
  }

  hideApp(){
    this.user = false;
  }
}


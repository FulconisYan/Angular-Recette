import { Component } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { UserDataService } from '../services/user-data.service';
import { User } from './user';
import { USERS } from './mock-users';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent {

    users: User[] = [];
    //testUsers = USERS;
    color: string = 'blue';

    constructor(private userService: UserDataService)
    {

    }

    ngOnInit(): void {
      this.getUsers();
      console.log(this.users);
    }

    getUsers(): void {
      this.userService.getUsers()
          .subscribe(users => this.users = users);
    }
}

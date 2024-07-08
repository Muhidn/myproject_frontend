import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserService } from '../service/user.service';
import { User } from '../user';


@Component({
  selector: 'app-user-management',
  templateUrl: './user-management.component.html',
  styleUrls: ['./user-management.component.css']
})
export class UserManagementComponent implements OnInit {
  users:any;
  user: any;

  constructor(
    private userService: UserService,
   
  ) {}

  ngOnInit():void {
    this.getAllUsers();
  }
 
  
  getAllUsers() {
    this.userService.getAllUsers().subscribe(
      (res: any) => {
        console.log(res);
        this.users = res;
      },
      (error: any) => {
        console.error('Error fetching users', error);
      }
    );
  }
  
 
}

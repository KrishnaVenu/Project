import { Component, OnInit } from '@angular/core';
import { UserModel } from './register.model';
import {UserService} from '../user.service'; 
import {Router} from '@angular/router';

@Component({
  selector: 'app-register-list',
  templateUrl: './register-list.component.html',
  styleUrls: ['./register-list.component.css']
})
export class RegisterListComponent implements OnInit {
title:String = 'registration list';
users: UserModel[];

  constructor(private userService: UserService,private router: Router) { }
  userItem = new UserModel(null,null,null,null);

  ngOnInit(): void {
    this.userService.getUsers().subscribe((data)=>{
      this.users=JSON.parse(JSON.stringify(data));
    })
  }

}

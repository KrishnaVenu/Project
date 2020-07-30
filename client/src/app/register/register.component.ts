import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {UserModel} from '../register-list/register.model';
import {UserService} from '../user.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
title:String = 'Registration';
user: UserModel[];
  constructor(private userService: UserService,private router: Router) { }
userItem = new UserModel(null,null,null,null);
  ngOnInit(): void {
  }
addUser(){
  this.userService.newUser(this.userItem);
  console.log('called');
  alert('success');
  this.router.navigate(['/add']);
}
  
}

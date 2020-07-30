import { Component, OnInit } from '@angular/core';
import {UserModel} from '../register-list/register.model';
import {UserService} from '../user.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
title:String = 'updation';
user: UserModel[];
  constructor(private userService: UserService,private router: Router) { }
updateItem = new UserModel(null,null,null,null);
  ngOnInit(): void {
  }
editUser(){
this.userService.updateUser(this.updateItem);
console.log(this.updateItem);
alert('success');
this.router.navigate(['/add']);
}
}

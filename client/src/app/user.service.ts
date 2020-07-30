import { Injectable } from '@angular/core';
//import { registerLocaleData } from '@angular/common';
import {HttpClient} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }
  getUsers(){
    return this.http.get('http://localhost:3000/register/user');
  }
  newUser(item){
return this.http.post('http://localhost:3000/register/insert',{'user': item})
.subscribe(data=>{console.log(data)})
  } 
 
  updateUser(item){
    console.log(item);
    return this.http.post('http://localhost:3000/register/update/:id',{'user': item})
    .subscribe(data=>{console.log(data)})
  }
  }


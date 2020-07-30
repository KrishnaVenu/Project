import { Component, OnInit } from '@angular/core';
import { FormBuilder,Validators } from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm = this.fb.group({
    email: ['',[Validators.required,Validators.pattern('')]],
    password: ['',[Validators.required,Validators.minLength(8)]]
  })

  constructor(private fb: FormBuilder,private router: Router) { }

  ngOnInit(): void {
  }
// loginUser(){
//   this.router.navigate(['/']);
// }
}

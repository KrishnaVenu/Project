import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent} from './home/home.component';
import { CoursesComponent} from './courses/courses.component'; 
import {AboutusComponent} from './aboutus/aboutus.component';
import {ContactusComponent} from './contactus/contactus.component';
import {RegisterComponent} from './register/register.component';
import { RegisterListComponent} from './register-list/register-list.component';
import {UpdateComponent} from './update/update.component';
import {LoginComponent} from './login/login.component';

const routes: Routes = [{path:'',component: HomeComponent},
                        {path:'courses',component: CoursesComponent},
                        {path:'aboutus',component:AboutusComponent},
                        {path:'contactus',component:ContactusComponent},
                        {path:'register',component:RegisterComponent},
                        {path:'add',component: RegisterListComponent},
                        {path:'update',component:UpdateComponent},
                        {path:'login',component:LoginComponent}
                      ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

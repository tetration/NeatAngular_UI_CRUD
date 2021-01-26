import { AuthGuard } from './account/shared/auth.guard';
import { CreateAccountComponent } from './account/create-account/create-account.component';
import { LoginComponent } from './account/login/login.component';
import { AuthenticationComponent } from './layout/authentication/authentication.component';
import { HomeComponent } from './layout/home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeeCreateComponent } from './employee-create/employee-create.component';
import { EmployeeEditComponent } from './employee-edit/employee-edit.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
//import {TaskFormComponent} from './tasks/task-form/task-form.component';
//import



const routes: Routes = [
  { path: '',
    component: HomeComponent,
    children:[
      { path: '',  pathMatch: 'full', redirectTo: 'create-employee' },
      { path: 'create-employee', component: EmployeeCreateComponent },
      { path: 'employees-list', component: EmployeeListComponent },
      { path: 'employee-edit/:id', component: EmployeeEditComponent } 

    ],
    canActivate: [AuthGuard]
  },
  {
    path: '',
    component: AuthenticationComponent,
    children: [
      {path: '', redirectTo: 'login', pathMatch: 'full'},
      {path: 'login', component: LoginComponent },
      {path: 'create-account', component: CreateAccountComponent}
    ]
  },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

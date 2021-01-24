import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './layout/home/home.component';
//import {TaskFormComponent} from './tasks/task-form/task-form.component';
//import



const routes: Routes = [
  { path: '',
    component: HomeComponent,
    children:[
      //{ path: '', component: TaskListComponent },
      //{ path: '', component: TaskFormComponent},

    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

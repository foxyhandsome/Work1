import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainProfileComponent } from './components/main-profile/main-profile.component';
import { TaskProfileComponent } from './components/task-profile/task-profile.component';
import { CreateTaskComponent } from './components/create-task/create-task.component';
import { EditTaskComponent } from './components/edit-task/edit-task.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/main-profile',
    pathMatch: 'full'
  },
  { path: 'main-profile', component: MainProfileComponent },
  { path: 'task-profile', component: TaskProfileComponent },
  { path: 'create-task', component: CreateTaskComponent },
  { path: 'edit-task', component: EditTaskComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

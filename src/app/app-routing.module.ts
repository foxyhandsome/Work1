import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainProfileComponent } from './components/main-profile/main-profile.component';
import { TaskProfileComponent } from './components/task-profile/task-profile.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/main-profile',
    pathMatch: 'full'
  },
  { path: 'main-profile', component: MainProfileComponent },
  { path: 'task-profile', component: TaskProfileComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

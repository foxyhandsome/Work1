import { HttpClient } from '@angular/common/http';
import { Component, OnInit, inject } from '@angular/core';
import { Router } from '@angular/router';
import { ProfileService } from 'src/app/shared/service/api.profile';
import { TaskService } from 'src/app/shared/service/api.task';



@Component({
  selector: 'app-main-profile',
  templateUrl: './main-profile.component.html',
  styleUrls: ['./main-profile.component.css']
})

 
export class MainProfileComponent implements OnInit{
  private _http = inject(HttpClient);
  private router = inject(Router);
  private _service = inject(ProfileService);

  
  profile : any;
  tasks : any;

  ngOnInit(): void {
    
    this.getProfile()
    this.getTasks()
  }

  getProfile() {
    this._service.getProfileInfo().subscribe((data: any) => {
      this.profile = data;
    });
  }
  
  getTasks() {
    this._service.getTaskBox().subscribe((data: any) => {
      this.tasks = data;
    });
  }

  viewTask(idtask: number) {
    this.router.navigate(['/task-profile'], {
      queryParams: {
        id_task: idtask
      }
    });
  }


}

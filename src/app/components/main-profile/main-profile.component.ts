import { Component, OnInit, inject } from '@angular/core';
import { Router } from '@angular/router';
import { ProfileService } from 'src/app/shared/service/api.profile.service';



@Component({
  selector: 'app-main-profile',
  templateUrl: './main-profile.component.html',
  styleUrls: ['./main-profile.component.css']
})

 
export class MainProfileComponent implements OnInit{;
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

  create(): void{
    this.router.navigate(['/create-task'])
  }

  edit(): void{
    this.router.navigate(['/edit-task'])
  }

  


}

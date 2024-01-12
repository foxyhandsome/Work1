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
  // tasks : any;
  tasks: any = { topic: '', description: '' };

  ngOnInit(): void {
    
    this.getProfile()
    // this.getTasks()
    this.getTask()
  }

  getProfile() {
    this._service.getProfileInfo().subscribe((data: any) => {
      this.profile = data;
    });
  }
  
  // getTasks() {
  //   this._service.getTaskBox().subscribe((data: any) => {
  //     this.tasks = data;
  //   });
  // }

  getTask() {
    const task = localStorage.getItem("tasklist");

    if (task !== null) {
      this.tasks = JSON.parse(task);
      console.log(this.tasks)
    } else {
      console.log("ไม่พบข้อมูล")
    }
  }

  // viewTask(idtask: number) {
  //   this.router.navigate(['/task-profile'], {
  //     queryParams: {
  //       id_task: idtask
  //     }
  //   });
  // }

  createTask(): void{
    this.router.navigate(['/create-task'])
  }

  editTask(): void{
    this.router.navigate(['/edit-task'])
  }

  deleteTask(){
    const confirm = window.confirm('ต้องการลบใช่หรือไม่');
    if(confirm){
      localStorage.removeItem("tasklist");
    }

  }

  


}

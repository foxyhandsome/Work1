import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TaskService } from 'src/app/shared/service/api.task.service';

@Component({
  selector: 'app-task-profile',
  templateUrl: './task-profile.component.html',
  styleUrls: ['./task-profile.component.css']
})
export class TaskProfileComponent implements OnInit{
  private _activatedRoute = inject(ActivatedRoute);
  private _router = inject(Router);
  // private _service = inject(TaskService);

  taskid! : number
  tasksdetails: any[] = [];

  ngOnInit(): void {

    this._activatedRoute.queryParams.subscribe(params => {
      const idtask = params['id_task'];
      if (idtask) {
        this.taskid = idtask;
        this.getTaskById(Number(this.taskid))
      }
    })

  }

  getTaskById(taskid: Number): void {
    console.log('Calling getTaskById with ID:', taskid);
    const storedData = localStorage.getItem('tasklist');
    console.log('Stored Data from localStorage:', storedData);
  
    if (storedData) {
        const tasks: any[] = JSON.parse(storedData);
  
        const foundTask = tasks.find(task => task.id === taskid);
  
        if (foundTask) {
            console.log('Found Task:', foundTask);
            this.tasksdetails = [foundTask];
        } else {
            console.error('ไม่พบ Task ที่ตรงกับ ID');
        }
    } else {
        console.error('ไม่พบข้อมูลทั้งหมด');
    }
  }

  btnback(): void{
    this._router.navigate(['/main-profile']);
  }

}



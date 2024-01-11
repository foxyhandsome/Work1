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
  private _service = inject(TaskService);

  taskid! : number
  detail : any

  ngOnInit(): void {

    this._activatedRoute.queryParams.subscribe(params => {
      const idtask = params['id_task'];
      if (idtask) {
        this.taskid = idtask;
        this.getTaskById(this.taskid)
      }
    })

  }

  getTaskById(taskid: Number): void {
    this._service.getTaskId(taskid).subscribe((data: any) => {
      this.detail = data;
    });
  }

  btnback(): void{
    this._router.navigate(['/main-profile']);
  }

}



import { HttpClient } from '@angular/common/http';
import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-task-profile',
  templateUrl: './task-profile.component.html',
  styleUrls: ['./task-profile.component.css']
})
export class TaskProfileComponent implements OnInit{
  private _activatedRoute = inject(ActivatedRoute);
  private _http = inject(HttpClient);
  private router = inject(Router);

  id_task! : number
  detail : any

  ngOnInit(): void {

    this._activatedRoute.queryParams.subscribe(params => {
      const idtask = params['id_task'];
      if (idtask) {
        this.id_task = idtask;
        this.gettaskbyid()
      }
    })

  }

  gettaskbyid(): void {
    this._http.get('http://103.13.31.37:17444/api/tasks/' + this.id_task).subscribe((data: any) => {
      this.detail = data;
    });
  }

  btnback(): void{
    this.router.navigate(['/main-profile']);
  }

}



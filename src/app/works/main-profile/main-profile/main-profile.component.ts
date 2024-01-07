import { HttpClient } from '@angular/common/http';
import { Component, OnInit, inject } from '@angular/core';
import { Router } from '@angular/router';



@Component({
  selector: 'app-main-profile',
  templateUrl: './main-profile.component.html',
  styleUrls: ['./main-profile.component.css']
})

 
export class MainProfileComponent implements OnInit{
  private _http = inject(HttpClient);
  private router = inject(Router);
  
  profile : any;
  tasks : any;

  ngOnInit(): void {
    
    this.getprofile()
    this.gettasks()
  }

  getprofile() {
    this._http.get('http://103.13.31.37:17444/api/my/profile').subscribe((data: any) => {
      this.profile = this.convert(data);
    });
  }
  
  gettasks() {
    this._http.get('http://103.13.31.37:17444/api/tasks').subscribe((data: any) => {
      this.tasks = data;
    });
  }

  viewtask(idtask: number) {
    this.router.navigate(['/task-profile'], {
      queryParams: {
        id_task: idtask
      }
    });
  }

  private convert(data: any): any {

    if (data.followers >= 1000) {
      data.followers = (data.followers / 1000) + 'K';
    }

    if (data.following >= 1000000) {
      data.following = (data.following / 1000000000) + 'B';
    }

    return data;
  }

}

import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

interface Task {
  id: number;
  name: string;
  date: string;
  description: string;
}

@Component({
  selector: 'app-main-profile',
  templateUrl: './main-profile.component.html',
  styleUrls: ['./main-profile.component.css']
})

 
export class MainProfileComponent implements OnInit{
  constructor(private http: HttpClient, private router: Router) {}
  
  profile: any;
  tasks: Task[] = [];

  ngOnInit(): void {
    

    this.http.get('http://103.13.31.37:17444/api/my/profile').subscribe((data: any) => {
      this.profile = this.convert(data);
    });

    this.http.get<any[]>('http://103.13.31.37:17444/api/tasks').subscribe((data) => {
          
          this.tasks = data.map(item => ({
            id: item.id,
            name: item.name,
            date: item.date,
            description: item.description,
          }));
        },
        (error) => {
          console.error('Error fetching tasks:', error);
        }
      );

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

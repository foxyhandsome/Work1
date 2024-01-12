import { Component, OnInit, inject } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-task',
  templateUrl: './create-task.component.html',
  styleUrls: ['./create-task.component.css']
})
export class CreateTaskComponent implements OnInit {

  taskForm: FormGroup;


  private _router = inject(Router);
  constructor(private fb: FormBuilder) {
    this.taskForm = this.fb.group({
      topic: '',
      description: ''
    });
    this.taskForm.valueChanges.subscribe(console.log);
  }




  ngOnInit(): void {

  }

  taskArray:any[]=[]


  createTask(){
    if(this.taskForm.valid){
      localStorage.setItem("tasklist",JSON.stringify(this.taskForm.value));
      this._router.navigate(['/main-profile'])
      alert("Task created successfully.")
    }

  }

  btnback(): void{
    this._router.navigate(['/main-profile']);
  }

}
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


  createTask(): void {
    if (this.taskForm.valid) {
      const storageData = localStorage.getItem("tasklist");
      let existingData = storageData ? JSON.parse(storageData) : [];
      const idtask = existingData.length + 1;

      const newData = {
        id: idtask,
        ...this.taskForm.value, 
        date: new Date().toISOString(),
      };

      existingData = existingData.concat(newData);

      localStorage.setItem("tasklist", JSON.stringify(existingData));

      this._router.navigate(['/main-profile']);
      alert("Create Task complete!");
    } else {
      alert("กรุณากรอกข้อมูลให้ครบถ้วน");
    }
  }

  btnback(): void{
    this._router.navigate(['/main-profile']);
  }

}
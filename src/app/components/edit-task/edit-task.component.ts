import { Component, OnInit, inject } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-edit-task',
  templateUrl: './edit-task.component.html',
  styleUrls: ['./edit-task.component.css']
})
export class EditTaskComponent implements OnInit{

  taskForm: FormGroup;
  taskinfo: any = { topic: '', description: '' };


  private _router = inject(Router);
  constructor(private fb: FormBuilder) {
    this.taskForm = this.fb.group({
      topic: '',
      description: ''
    });
  }

  ngOnInit(): void {
    this.getTaskInfo()
  }

  getTaskInfo() {
    const task = localStorage.getItem("tasklist");

    if (task !== null) {
      this.taskinfo = JSON.parse(task);
      if (this.taskForm) {
        this.taskForm.patchValue(this.taskinfo);
      } else {
        console.error('Form is not initialized!');
      }
    } else {
      console.log("ไม่พบข้อมูล");
    }
  }

  editTask(){
    if(this.taskForm.valid){
      localStorage.setItem("tasklist",JSON.stringify(this.taskForm.value));
      this._router.navigate(['/main-profile'])
      alert("Successfully edited")
    }

  }

  btnback(): void{
    this._router.navigate(['/main-profile']);
  }

}

import { Component, OnInit, inject } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-edit-task',
  templateUrl: './edit-task.component.html',
  styleUrls: ['./edit-task.component.css']
})
export class EditTaskComponent implements OnInit{

  taskForm: FormGroup;
  taskinfo: any = { topic: '', description: '' };
  id!: number;

  private _activatedRoute = inject(ActivatedRoute);
  private _router = inject(Router);
  constructor(private fb: FormBuilder) {
    this.taskForm = this.fb.group({
      topic: '',
      description: ''
    });
  }

  ngOnInit(): void {

    this._activatedRoute.queryParams.subscribe(params => {
      this.id = +params['id']; 
      console.log("Received ID:", this.id, typeof this.id);
      this.getTaskInfo(this.id)
    });
  }

  getTaskInfo(id: number): void {
    console.log('Calling getTaskById with ID:', id);
    const storedData = localStorage.getItem('tasklist');

    if (storedData) {
      const tasks: any[] = JSON.parse(storedData);

      const foundTask = tasks.find(task => task.id === id);

      if (foundTask) {
        console.log('Found Task:', foundTask);
        this.taskForm.patchValue({
          topic: foundTask.topic,
          description: foundTask.description
        });
      } else {
        console.error('Task with specified ID not found');
      }
    } else {
      console.error('No data found in localStorage');
    }
  }

  editTask(){
    if (this.taskForm && this.taskForm.valid) {
      const storageData = localStorage.getItem('tasklist');

      if (storageData) {
        const tasks: any[] = JSON.parse(storageData);

        const taskIndex = tasks.findIndex(tasklist => tasklist.id === this.id);

        if (taskIndex !== -1) {
          tasks[taskIndex].topic = this.taskForm.value.topic;
          tasks[taskIndex].description = this.taskForm.value.description;
          tasks[taskIndex].date = new Date().toISOString();

          localStorage.setItem('tasklist', JSON.stringify(tasks));
          this._router.navigate(['/main-profile'])
          alert('Edit Task complete!');
        } else {
          console.error('Cannot find match id');
        }
      } else {
        console.error('Cannot find info');
      }
    } else {
      alert('Please fill in complete information.');
    }
  }

  

  btnback(): void{
    this._router.navigate(['/main-profile']);
  }

}

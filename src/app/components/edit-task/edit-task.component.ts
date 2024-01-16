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
  tasksLocal: any[] = [];
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
      this.id = +params['id']; // ใส่เครื่องหมาย + เพื่อแปลงเป็น number
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

        this.tasksLocal = [foundTask];
      } else {
        console.error('Task with specified ID not found');
      }
    } else {
      console.error('No data found in localStorage');
    }
  }

  editTask(){
    if (this.taskForm && this.taskForm.valid) {
      // ดึงข้อมูลทั้งหมดจาก Local Storage
      const storageData = localStorage.getItem('tasklist');

      if (storageData) {
        const tasks: any[] = JSON.parse(storageData);

        // ค้นหา index ของ task ที่ตรงกับ ID ที่ต้องการแก้ไข
        const taskIndex = tasks.findIndex(task => task.id === this.id);

        if (taskIndex !== -1) {
          // แก้ไขข้อมูล topic และ description ใน tasks ด้วยค่าจาก validateForm
          tasks[taskIndex].topic = this.taskForm.value.topic;
          tasks[taskIndex].description = this.taskForm.value.description;

          // กำหนดเวลาที่แก้ไขใน properties date
          tasks[taskIndex].date = new Date().toISOString();

          // บันทึกข้อมูลทั้งหมดลงใน Local Storage
          localStorage.setItem('tasklist', JSON.stringify(tasks));

          // clear tasksLocal
          this.tasksLocal = [];
          this._router.navigate(['/main-profile'])
          alert('Edit Task complete!');
        } else {
          console.error('ไม่พบ Task ที่ตรงกับ ID ที่ต้องการแก้ไข');
        }
      } else {
        console.error('ไม่พบข้อมูลทั้งหมด');
      }
    } else {
      alert('Please fill in complete information.');
    }
  }

  

  btnback(): void{
    this._router.navigate(['/main-profile']);
  }

}

import { Component, OnInit } from '@angular/core';
import { TaskService } from '../services/task';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [CommonModule, FormsModule], 
  templateUrl: './tasks.html',
  styleUrls: ['./tasks.css']
})
export class Tasks implements OnInit {

  tasks: any[] = [];
  showModal = false;

  task: any = {
    taskName: '',
    description: '',
    mentorName: '',
    internName: '',
    createdDate: '',
    deadline: '',
    status: 'PENDING'
  };
today: string = new Date().toISOString().split('T')[0];

  constructor(private taskService: TaskService) {}

  ngOnInit(): void {
    this.getAllTasks();
  }

  openModal() {
    this.showModal = true;
  }

  closeModal() {
    this.showModal = false;
  }

  saveTask() {
    this.task.createdDate = new Date().toISOString().split('T')[0];

    this.taskService.addTask(this.task).subscribe(() => {
      alert("Task Created Successfully");
      this.closeModal();
      this.getAllTasks();
    });
  }

  getAllTasks() {
    this.taskService.getAllTasks().subscribe((data: any[]) => {
      this.tasks = data;
    });
  }

  deleteTask(id: number) {
    if(confirm("Are you sure to delete this task?")) {
      this.taskService.deleteTask(id).subscribe(() => {
        this.getAllTasks();
      });
    }
  }
}
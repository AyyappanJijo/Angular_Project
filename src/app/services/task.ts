import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  private baseUrl = "http://localhost:8080/api/tasks";

  constructor(private http: HttpClient) {}

  getAllTasks() {
    return this.http.get<any[]>(this.baseUrl);
  }

  addTask(task: any) {
    return this.http.post(this.baseUrl, task);
  }

  deleteTask(id: number) {
    return this.http.delete(`${this.baseUrl}/${id}`);
  }
}
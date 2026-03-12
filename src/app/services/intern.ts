import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class InternService {

  private baseUrl = "http://localhost:8080/api/interns";

  constructor(private http: HttpClient) {}

  getAllInterns() {
    return this.http.get<any[]>(this.baseUrl);
  }

  addIntern(intern: any) {
    return this.http.post(this.baseUrl, intern);
  }

  deleteIntern(id: number) {
    return this.http.delete(`${this.baseUrl}/${id}`);
  }
}
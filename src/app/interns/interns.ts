import { Component, OnInit } from '@angular/core';
import { InternService } from '../services/intern';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-intern',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './interns.html',
  styleUrl: './interns.css'
})
export class Intern implements OnInit {

  interns: any[] = [];
  showModal = false;

  intern: any = {
    internId: '',
    internName: '',
    email: '',
    phoneNumber: '',
    college: '',
    domain: '',
    internshipStartDate: '',
    internshipEndDate: '',
    status: ''
  };
  onSubmit: any;

  constructor(private internService: InternService) { }

  ngOnInit(): void {
    this.getAllInterns();
  }

  openModal() {
    this.showModal = true;
  }

  closeModal() {
    this.showModal = false;
  }

  saveIntern() {
    this.internService.addIntern(this.intern).subscribe(response => {
      alert("Intern Added Successfully");
      this.closeModal();
      this.getAllInterns();
    });
  }

  getAllInterns() {
    this.internService.getAllInterns().subscribe(data => {
      this.interns = data;
    });
  }
}
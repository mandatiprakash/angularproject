import { Component } from '@angular/core';
import { StudentDetailComponent } from "../student-detail/student-detail.component";
import { DatabindingComponent } from '../databinding/databinding.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-student',
  standalone: true,
  imports: [StudentDetailComponent, CommonModule],
  templateUrl: './student.component.html',
  styleUrl: './student.component.css'
})
export class StudentComponent {



}

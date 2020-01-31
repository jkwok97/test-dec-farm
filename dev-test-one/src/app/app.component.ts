import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MathService } from './math.service';
import { Course } from './course';
import { DataService } from './data.service';

@Component({
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  formGroup: FormGroup;

  courses: Course[];

  result: number;

  constructor(private fb: FormBuilder,
              private mathService: MathService,
              private dataService: DataService) {
  }

  ngOnInit(): void {
    this.formGroup = this.createForm();

    this.dataService.getCourses().subscribe((courses: Course[]) => this.courses = courses);
  }

  createForm(): FormGroup {
    return this.fb.group({
      value1: [null, Validators.required],
      value2: [null, Validators.required]
    });
  }

  onSubmit() {
    this.result = this.mathService.algorithm(this.formGroup.value);
  }
}

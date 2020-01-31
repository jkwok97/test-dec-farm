import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Course, CourseType } from './course';

const COURSES: Course[] = [
  {
    id: 1,
    courseType: CourseType.Advanced,
    title: 'Custom Reactive Form Validation'
  },
  {
    id: 2,
    courseType: CourseType.Beginner,
    title: 'Directives'
  },
  {
    id: 3,
    courseType: CourseType.Advanced,
    title: 'Oauth'
  },
  {
    id: 4,
    courseType: CourseType.Beginner,
    title: 'Unit Testing'
  },
  {
    id: 4,
    courseType: CourseType.Advanced,
    title: 'Authentication'
  },
  {
    id: 6,
    courseType: CourseType.Advanced,
    title: 'NGRX'
  },
  {
    id: 7,
    courseType: CourseType.Beginner,
    title: 'Child Parent Data Communication'
  },
  {
    id: 8,
    courseType: CourseType.Beginner,
    title: 'Pipes'
  },
  {
    id: 9,
    courseType: CourseType.Advanced,
    title: 'Guards'
  },
];

@Injectable({
  providedIn: 'root'
})
export class DataService {

  getCourses(): Observable<Course[]> {
    return of(COURSES);
  }
}

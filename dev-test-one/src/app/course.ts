export enum CourseType {
  Beginner = 'Beginner',
  Advanced = 'Advanced'
}

export interface Course {
  id: number;
  courseType: CourseType;
  title: string;
}

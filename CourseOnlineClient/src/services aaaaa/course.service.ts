// import { Injectable } from '@angular/core';

// @Injectable({
//   providedIn: 'root'
// })
// export class CourseService {

//   constructor() { }
// }



import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CourseService {
  private apiUrl = 'http://localhost:3000/api/courses';

  constructor(private http: HttpClient) {}

  getCourses(): Observable<any> {
    return this.http.get(this.apiUrl);
  }

  getCourseDetails(courseId: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/${courseId}`);
  }

  addCourse(course: any): Observable<any> {
    return this.http.post(this.apiUrl, course);
  }

  updateCourse(courseId: string, course: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/${courseId}`, course);
  }

  deleteCourse(courseId: string): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${courseId}`);
  }
}
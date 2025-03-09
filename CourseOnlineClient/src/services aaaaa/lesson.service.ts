// import { Injectable } from '@angular/core';

// @Injectable({
//   providedIn: 'root'
// })
// export class LessonService {

//   constructor() { }
// }


import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LessonService {
  private apiUrl = 'http://localhost:3000/api/lessons';

  constructor(private http: HttpClient) {}

  getLessons(courseId: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/course/${courseId}`);
  }

  addLesson(courseId: string, lesson: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/course/${courseId}`, lesson);
  }

  updateLesson(lessonId: string, lesson: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/${lessonId}`, lesson);
  }

  deleteLesson(lessonId: string): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${lessonId}`);
  }
}
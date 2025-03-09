// import { Injectable } from '@angular/core';

// @Injectable({
//   providedIn: 'root'
// })
// export class UserService {

//   constructor() { }
// }



import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUrl = 'http://localhost:3000/api/users';

  constructor(private http: HttpClient) {}

  getUserDetails(userId: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/${userId}`);
  }

  updateUserDetails(userId: string, user: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/${userId}`, user);
  }
}
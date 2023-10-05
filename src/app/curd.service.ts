import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {
  InsertedSuccess,
  Read,
  StudentDetails,
  UniqueConstraintError,
  appoint,
} from './student-details';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class CRUDService {
  constructor(private http: HttpClient) {}
  headers = new HttpHeaders({
    'content-type': 'application/json',
    Authentication: 'Bearer' + localStorage.getItem('token'),
  });


  FoodHeaders = new HttpHeaders({
    'X-RapidAPI-Key': '9d95c08d75mshae57f7f480c131ap1443f3jsn5525ed1bd303',
    'X-RapidAPI-Host': 'pizza-and-desserts.p.rapidapi.com',
  });


  
  private url = 'http://localhost:3000/';

  Insert(
    Details: StudentDetails
  ): Observable<InsertedSuccess | UniqueConstraintError> {
    return this.http.post<InsertedSuccess | UniqueConstraintError>(
      this.url + 'users/Insert',
      Details,
      { headers: this.headers }
    );
  }
  a_Insert(
    Details1: appoint
  ): Observable<InsertedSuccess | UniqueConstraintError> {
    return this.http.post<InsertedSuccess | UniqueConstraintError>(
      this.url + 'appoint/a_Insert',
      Details1,
      { headers: this.headers }
    );
  }
  Read(email: String): Observable<Read> {
    return this.http.get<Read>(`${this.url}appoint/Read${email}`);
  }
 
  Delete(email: String): Observable<InsertedSuccess> {
    console.log(`${this.url}appoint/Delete${email}`);
    return this.http.delete<InsertedSuccess>(
      `${this.url}appoint/Delete${email}`
    );
  }
  Update(email: String, Details: appoint) {
    return this.http.put(`${this.url}appoint/Update${email}`, Details, {
      headers: this.headers,
    });
  }



  GetFood() {
    return this.http.get('https://pizza-and-desserts.p.rapidapi.com/pizzas', {
      headers: this.FoodHeaders,
    });
  }
}

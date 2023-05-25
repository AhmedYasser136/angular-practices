import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import { IEmployee } from './app/employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  _url: string = "/assets/Data/employees.json"
  constructor(private http: HttpClient) { }



  getEmployees(): Observable<IEmployee[]> {
    return this.http.get<IEmployee[]>(this._url).pipe(catchError((err) => {
      return throwError(() => err.message || "server error")
    }))

  }
}


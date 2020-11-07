import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
const baseApi = 'http://localhost:3100';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }
  completeBooking(body): Observable<any> {
    return this.http.post(`${baseApi}/service/task`, body).pipe(catchError(this.handleError));
  }
  selectCategory(){
    return this.http.get(`${baseApi}/service/showService`);
  }
  selectCity(){
    return this.http.get(`${baseApi}/service/showCity`);
  }
  signUp(body):Observable<any>{
    return this.http.post(`${baseApi}/service/signup`,body).pipe(catchError(this.handleError));
  }
  handleError(error) {
    console.log(error);
    if (error.status === 404) {
      return error
    }
    return throwError(error);
  }
}

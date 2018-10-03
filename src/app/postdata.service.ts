import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { User} from '../assets/data/displaydata';
import { catchError}  from 'rxjs/operators'; 
import { throwError}  from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostdataService {
 public post_url ='http://localhost:3000/postdata';
// public get_url ='http://localhost:3000/postdata'
  constructor( private http:HttpClient) { }

  postdata( user : User){
    return this.http.post<any>(this.post_url, user)
        .pipe(catchError(this.errorHandler))
  }

  // getdata(){
  //   return this.http.get<any>(this.get_url)
  //       .pipe(catchError(this.errorHandler))
  // }

  errorHandler(error: HttpErrorResponse){
    return throwError(error);

  }
}

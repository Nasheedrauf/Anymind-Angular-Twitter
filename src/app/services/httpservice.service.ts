import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { environment } from 'src/environments/environment';
import { catchError, tap, map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class HttpserviceService {
  public headers=new HttpHeaders({'Content-Type': 'application/json'});
  public httpOptions = {
      headers: this.headers
      .append('Access-Control-Allow-Origin', '*')
    };
  constructor(private http: HttpClient) {

  }

  private handleError<T> ( result?: T) {
    return (error: any): Observable<T> => {
    // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

 
  Get (url:string): Observable<any> {
    return this.http.get<any>(environment.baseUrl+url) //environment.baseUrl+url,this.httpOptions //for sample json use ./assets/sample.json
      .pipe(
        tap((temp: any) => {}),
        catchError(this.handleError( []))
      );
  }

  Post (url:string,object:any): Observable<any> {
    return this.http.post<any>(environment.baseUrl+url, object).pipe(
      tap((product: any) => {}),
      catchError(this.handleError<any>())
    );
  }
}

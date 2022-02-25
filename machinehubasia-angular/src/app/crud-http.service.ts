// crud-http.service.ts
import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
  HttpParams,
} from '@angular/common/http';
// import { Injectable } from '@angular/common';
import { Injectable } from '@angular/core';
import { catchError } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CrudHttpService {
  /**
   * http method for service
   * @link : https://www.freakyjolly.com/angular-service-example-crud-operations/
   */

  headers = new HttpHeaders().set('Content-Type', 'application/json');

  constructor(private http: HttpClient) {}

  // Create
  fetchData(
    endpoint: string,
    args: any,
    method: string,
    baseUrl: string
  ): Observable<any> {
    let apiUrl = baseUrl + endpoint;

    // console.log('args', args);

    if ('get' === method) {
      if (Object.keys(args).length > 0) {
        apiUrl += '?' + this.toQueryString(args);
      }
    }
    return this.http.get(apiUrl).pipe(catchError(this.handleError));
  }
  // ************************************************
  postData(
    endpoint: string,
    args: Object,
    method: string,
    baseUrl: string
  ): Observable<any> {
    let apiUrl = baseUrl + endpoint;
    if ('post' === method) {
      if (Object.keys(args).length > 0) {
      }
    }
    return this.http.post(apiUrl, args).pipe(catchError(this.handleError));
  }
  // *******************************************************

  // Handle API errors
  handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      console.error('An error occurred:', error.error.message);
    } else {
      console.error(
        `Backend returned code ${error.status}, ` + `body was: ${error.error}`
      );
    }
    return throwError('Something bad happened; please try again later.');
  }

  /**
   * Convert to query string
   * @param obj
   */
  private toQueryString(obj: any) {
    var parts = [];

    for (var i in obj) {
      if (obj.hasOwnProperty(i)) {
        parts.push(encodeURIComponent(i) + '=' + encodeURIComponent(obj[i]));
      }
    }

    return parts.join('&');
  }
}

import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

  getSiteDetails(prodId: string, viewId: string): any {
    const BASE_URL = 'http://www.i2ce.in/reviews';
    const productId = prodId;
    const viewerId = viewId;
    const queryParams = `/${productId}/${viewerId}`;
    return this.http.get(BASE_URL + queryParams).pipe(catchError(this.ErrorHandler));
  }

  ErrorHandler(error: HttpErrorResponse) {
    // console.log(error.message);
    if (error.error instanceof ErrorEvent) {
      console.error('An error occured:', error.error.message);
    }
    else {
      console.error(`Backend returned code ${error.status}, ` + `body was: ${error.error.message}`);
    }
    return throwError('Something Bad Happened...Please try again later');
  }
}

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { tap, delay, catchError } from 'rxjs/operators';
import { Token } from './token';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  isLoggedIn = sessionStorage.getItem("isLoggedIn") == "true";
  token?: Token;

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) { }

  // store the URL so we can redirect after logging in
  redirectUrl: string | null = null;

  login(username: string, password: string): Observable<Token | Error> {
    let url = "/api/Users/authenticate";
    let data = {"Username": username, "Password": password };
    return this.http.post<Token>(url, data).pipe(
      catchError(this.handleError)
    );
  }

  handleError(error: HttpErrorResponse): Observable<Error> {
    
    // Return an observable with a user-facing error message.
    return throwError(() => new Error('Login failed'));
  }


  logout(): void {
    this.isLoggedIn = false;
  }

}



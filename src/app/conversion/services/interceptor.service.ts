import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor, HttpErrorResponse } from '@angular/common/http';

import { Observable, Subject, of, throwError } from 'rxjs';
import { filter, take, switchMap, catchError, finalize, mergeMap, tap } from 'rxjs/operators';

import { ApiService } from 'src/app/core/services/api.service';

@Injectable({
  providedIn: 'root',
})
export class InterceptorService implements HttpInterceptor {
  isRefreshingToken = false;
  forgeTokenSubject: Subject<IForgeToken> = new Subject<IForgeToken>();
  private forgeToken: IForgeToken;

  constructor(private apiService: ApiService) { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    if (request.url.match(/developer.api.autodesk.com\//)) {

      if (!this.forgeToken) {

        this.forgeToken = JSON.parse(localStorage.getItem('forgeToken')) as IForgeToken;
      }

      if (!this.forgeToken)
      {
        this.refreshToken().subscribe(t => this.forgeToken = t);
      }

      request = this.addToken(request, this.forgeToken);

      return next.handle(request).pipe(
        catchError((error) => {
          if (error instanceof HttpErrorResponse) {
            const err: HttpErrorResponse = error as HttpErrorResponse;
            switch (err.status) {
              case 401:
                return this.handle401Error(request, next);
              default:
                console.log(error);
                return this.handleError(request, next, err);
            }
          } else {
            return throwError(error);
          }
        })
      );
    } else {
      return next.handle(request);
    }
  }

  private addToken(request: HttpRequest<any>, forgeToken: IForgeToken): HttpRequest<any> {
    return (request = request.clone({
      setHeaders: {
        Authorization: `Bearer ${forgeToken?.access_token}`,
      },
    }));
  }

  private handleError(request: HttpRequest<any>, next: HttpHandler, err: HttpErrorResponse): Observable<HttpEvent<any>> {

    // in a real world app, we may send the server to some remote logging infrastructure
    // instead of just logging it to the console
    let errorMessage = '';
    if (err.error instanceof Error) {
      // A client-side or network error occurred. Handle it accordingly.
      errorMessage = `An error occurred: ${err.error.message}`;
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  }

  handle401Error(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (!this.isRefreshingToken) {
      this.isRefreshingToken = true;

      // Reset here so that the following requests wait until the token
      // comes back from the refreshToken call.
      this.forgeTokenSubject.next(null);

      return this.refreshToken().pipe(
        switchMap((newForgeToken: IForgeToken) => {
          if (newForgeToken) {
            this.forgeTokenSubject.next(newForgeToken);
            return next.handle(this.addToken(request, newForgeToken));
          }
          else {
            throwError('No token found');
          }
        }),
        catchError((error) => {
          // If there is an exception calling 'refreshToken', bad news
          return throwError(error);
        }),
        finalize(() => {
          this.isRefreshingToken = false;
        })
      );
    } else {
      return this.forgeTokenSubject.pipe(
        filter((token) => token != null),
        take(1),
        switchMap((token) => {
          return next.handle(this.addToken(request, token));
        })
      );
    }
  }

  public refreshToken(): Observable<IForgeToken> {
    // We must refresh the token before using the user
    return this.apiService.getForgeToken().pipe(
      tap((t) => {
        localStorage.setItem('forgeToken', JSON.stringify(t));
        this.forgeTokenSubject.next(t);
      })
    );
  }
}

export interface IForgeToken {
  access_token: string;
  token_type: string;
  expires_in: number;
}

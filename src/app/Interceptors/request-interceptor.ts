import {Injectable} from '@angular/core';
import {HttpInterceptor, HttpHandler, HttpRequest, HttpEvent, HttpHeaders} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {Observable} from 'rxjs';

@Injectable()

export class RequestInterceptor implements HttpInterceptor {

  constructor() {
  }

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler){
      let customHeaders: HttpHeaders = new HttpHeaders();

    customHeaders = customHeaders.set('x-api-key', environment.apiKey);
    
    const apiRequest = req.clone({
      setHeaders: {''x-api-key: environment.apiKey}
    });
    return next.handle(apiRequest).pipe(catchError( (error:HttpErrorResponse) => {
      return throwError(error);
    }));
  }


}

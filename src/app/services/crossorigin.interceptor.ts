import { Injectable } from '@angular/core';
    import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
    import { Observable } from 'rxjs';

    import { HttpserviceService } from './httpservice.service';

    
    @Injectable()
    export class crossOriginInterceptor implements HttpInterceptor {
       

      constructor(private authenticationService: HttpserviceService) {
       
      }

      intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        // add authorization header 
          request = request.clone({
            setHeaders: {
                "Access-Control-Allow-Methods": "GET, POST, DELETE, PUT"
            }
          });
         
        return next.handle(request);
      }
    }
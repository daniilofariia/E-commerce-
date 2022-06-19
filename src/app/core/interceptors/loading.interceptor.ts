import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { finalize, Observable } from 'rxjs';
import { LoadingService } from 'src/app/views/Services/loading.service';

@Injectable()
export class LoadingInterceptor implements HttpInterceptor {
  
  private activeRequests = 0;

  constructor(private loadingservice: LoadingService) {

  }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
     if(this.activeRequests = 0){
      this.loadingservice.mostrar();
         }
         this.activeRequests++;
    
    return next.handle(request).pipe(
      finalize(() => {
        this.activeRequests--;
        
        if (this.activeRequests = 0){
          this.loadingservice.ocultar();
        }
      })
    );
  }
}

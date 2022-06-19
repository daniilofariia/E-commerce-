

import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
    providedIn:'root'
})

export class LoadingService {
    private loadingsubject = new BehaviorSubject<boolean>(true);
  
    loading$: Observable<boolean> = this.loadingsubject.asObservable();

    ocultar(): void{
        this.loadingsubject.next(false);

    }


    mostrar(): void{
        this.loadingsubject.next(true);
    }

}

import { map, catchError, finalize } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

 import { EMPTY, Observable } from 'rxjs';

import { ErrorHandler, Injectable } from '@angular/core';
import  { MatSnackBar } from '@angular/material/snack-bar';
import { Product } from './../products/product-create/product.model';
import { LoadingService } from 'src/app/views/Services/loading.service';


@Injectable({
  providedIn: 'root'
})
export class ProductService {
  baseurl ="http://localhost:3001/products"
  

  constructor(private MatSnackBar: MatSnackBar,
     private http: HttpClient,
     private loadservice: LoadingService) { }

  showonsonole(msg: string, isError: boolean = false) : void {
   this.MatSnackBar.open(msg, 'X' , {
     duration:3000,
     horizontalPosition: "right",
     verticalPosition: "bottom",
     panelClass:isError ? ['msg-erro']: ['msg-sucess']
   })
  }
  // metodo para criar o produto e conectar com API
  create(product: Product): Observable<Product> {
    return this.http.post<Product>(this.baseurl, product).pipe(
      map((obj) => obj),
      catchError(e => this.ErrorHandler(e))
      );
  }


    
   // metodo para ler o produto na API e mostrar na Lista
   read(): Observable<Product[]>{
    this.loadservice.mostrar();
     return this.http.get<Product[]>(this.baseurl).pipe(
      
      map((obj) => obj),
      catchError(e => this.ErrorHandler(e)),
      finalize(()=> this.loadservice.ocultar()));
   
   }
   // Metodo para ler por ID baseado na url
   readById(id: string): Observable<Product>{
     const url = `${this.baseurl}/${id}`
     return this.http.get<Product>(url).pipe(
      map((obj) => obj),
      catchError(e => this.ErrorHandler(e))
      );

   } // metodo para mandar carregado o produto do site
   update(product : Product): Observable<Product>{
    const url = `${this.baseurl}/${product.id}`
     return this.http.put<Product>(url, product).pipe(
      map((obj) => obj),
      catchError(e => this.ErrorHandler(e))
      );

   } // metodo para deletar o produto
   delete(id: number): Observable<Product>{
    const url = `${this.baseurl}/${id}`
    return this.http.delete<Product>(url).pipe(
      map((obj) => obj),
      catchError(e => this.ErrorHandler(e))
      );

} 

// mensagem de erro caso pare o backend
ErrorHandler(e: any): Observable<any>{
  this.showonsonole('Infelizmente ocorreu um erro!', true)
  return EMPTY

}

}
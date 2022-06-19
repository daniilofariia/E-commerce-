import { cliente } from '../../components/clientes/create-cliente/clientes.model';

import { map, catchError } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

 import { EMPTY, Observable } from 'rxjs';

import { ErrorHandler, Injectable } from '@angular/core';
import  { MatSnackBar } from '@angular/material/snack-bar';



@Injectable({
  providedIn: 'root'
})
export class clientesservice {
  baseurl ="http://localhost:3000/posts"
  

  constructor(private MatSnackBar: MatSnackBar, private http: HttpClient) { }

  mensagem(msg: string, isError: boolean = false) : void {
   this.MatSnackBar.open(msg, 'X' , {
     duration:3000,
     horizontalPosition: "right",
     verticalPosition: "bottom",
     panelClass:isError ? ['msg-erro']: ['msg-sucess']
   })
  }
  create(clientes: cliente): Observable<cliente>{
    return this.http.post<cliente>(this.baseurl, clientes)
  }
  read(): Observable<cliente[]>{
    return this.http.get<cliente[]>(this.baseurl)
  }
  // Metodo para ler por ID baseado na url
  readById(id: string): Observable<cliente>{
    const url = `${this.baseurl}/${id}`
    return this.http.get<cliente>(url)
     }
     // metodo para mandar carregado o produto do site
   update(product : cliente): Observable<cliente>{
    const url = `${this.baseurl}/${product.id}`
     return this.http.put<cliente>(url, product)
}
 // metodo para deletar o produto
  delete(id: number): Observable<cliente>{
  const url = `${this.baseurl}/${id}`
  return this.http.delete<cliente>(url)
 }
}
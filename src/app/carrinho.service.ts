import { Injectable } from '@angular/core';

import { BehaviorSubject, finalize } from 'rxjs';
import { Produtos } from './home/produtos/produtos.model';
import { MatSnackBar } from '@angular/material/snack-bar';
import { LoadingService } from './views/Services/loading.service';
import { registerLocaleData } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
// carrinho adicionado mesmo recarregando permancesce salvo no localstorage
export class CarrinhoService {
  placehodler = [];
  carrinhoitems = new BehaviorSubject([]);

  constructor(private MatSnackBar: MatSnackBar,
    private loadingservice:LoadingService) { 

    const ls = this.getcarrinhoData();
    if(ls) this.carrinhoitems.next(ls);
  }
  Mensagemconsole(msg: string, isError: boolean = false) : void {
    this.MatSnackBar.open(msg, 'X' , {
      duration:2000,
      horizontalPosition: "center",
      verticalPosition: "bottom",
      panelClass:isError ? ['msg-erro']: ['msg-sucess']
    })
  }

  removerItem(produto:Produtos){
    const ls = this.removercarrinho();
    let existir: Produtos;
    this.carrinhoitems.next(this.getcarrinhoData());

    
    }
 
 adicionaritem(produto:Produtos){
    this.getcarrinhoData()
    const ls = this.getcarrinhoData();
    let existir: Produtos
        if(ls)
    existir = ls.find((item)=>{
      return item.id === produto.id;
    
     
      
    }
    );
    this.carrinhoitems.next(this.getcarrinhoData());
       
if(existir)
  {
  existir.quantidade++;
this.setcarrinhodata(ls);
  } 
else{
  if(ls){
    const Novadata = [...ls, produto];
   this.setcarrinhodata(Novadata);
   this.carrinhoitems.next(this.getcarrinhoData());
   
  }
  this.placehodler.push(produto);
  this.setcarrinhodata(this.placehodler);

}

 }

setcarrinhodata(Data: any){
  localStorage.setItem('carrinho', JSON.stringify(Data));
  
}
getcarrinhoData(){
  return JSON.parse(localStorage.getItem('carrinho'))
    
}
removercarrinho(){
  return localStorage.removeItem('carrinho')
  
}
}
// carrinho esta no header 
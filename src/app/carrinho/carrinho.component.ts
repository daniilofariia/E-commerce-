import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CarrinhoService } from '../carrinho.service';
import { Produtos } from '../home/produtos/produtos.model';


@Component({
  selector: 'app-carrinho',
  templateUrl: './carrinho.component.html',
  styleUrls: ['./carrinho.component.css']
})
export class CarrinhoComponent implements OnInit {
items: Produtos[] = [];
total:number;
  constructor(private carrinhoService: CarrinhoService,private MatSnackBar: MatSnackBar) { }

  Mensagemconsole(msg: string, isError: boolean = false) : void {
    this.MatSnackBar.open(msg, 'X' , {
      duration:3000,
      horizontalPosition: "right",
      verticalPosition: "bottom",
      panelClass:isError ? ['msg-erro']: ['msg-sucess']
    })
  }
  ngOnInit(): void {
  this.carrinhoService.carrinhoitems.subscribe(data=>{
  this.items = data;
  if (this.items) this.Pegartotal(this.items);
  });
}

Deletaritem(i:number){
  this.items.splice(i, 1);
  this.carrinhoService.setcarrinhodata(this.items);
  this.Pegartotal(this.items);
  this.carrinhoService.carrinhoitems.next(this.getcarrinhoData());

}

ValidarCompra(event: any, i:number){
  const quantidade = +event.target.value;
  if(quantidade < 1){
    event.target.value = this.items[i].quantidade; 
  return;
  
 }


this.quantidadeAtualizada(quantidade, i)

}
private quantidadeAtualizada(quantidade:number, i:number){
  this.items[i].quantidade = quantidade;
  this.carrinhoService.setcarrinhodata(this.items);
  this.Pegartotal(this.items);

}

Pegartotal(data:any){
let subtotalCompra = 0;
for (const item of data)
subtotalCompra += item.preco * item.quantidade;
this.total = subtotalCompra

}
getcarrinhoData(){
  return JSON.parse(localStorage.getItem('carrinho'))
    
}}

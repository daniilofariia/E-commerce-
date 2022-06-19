import { headerData } from './header-data.model';
import {  headerService } from './header.service';
import { Component, OnInit } from '@angular/core';
import { CarrinhoService } from 'src/app/carrinho.service';
import { Produtos } from 'src/app/home/produtos/produtos.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
 itemcarrinho: number;
  constructor(private headerService: headerService,private carrinhoService: CarrinhoService) { }

  ngOnInit(): void {
    this.carrinhoService.carrinhoitems.subscribe(d=>{
      this.itemcarrinho = d.length;
   
      
    });
  }
get title(): string{
  return this.headerService.headerData.title
}
get icon(): string{
  return this.headerService.headerData.icon
}
get routeUrl(): string{
  return this.headerService.headerData.routeUrl
}



 
}
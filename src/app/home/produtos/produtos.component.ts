import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CarrinhoService } from 'src/app/carrinho.service';
import { Produtos } from './produtos.model';
import { ProdutosService } from './service/produtos.service';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.css']
})
export class ProdutosComponent implements OnInit {
  Produtos: Produtos[] = [];
 

  constructor(private produtosService: ProdutosService,
    private carrinhoService: CarrinhoService,
    private router: Router) { }

  ngOnInit(): void {
    this.Produtos = this.produtosService.getProdutos();
  }
  adicionarAoCarrinho(Produto: Produtos){
    this.carrinhoService.adicionaritem(Produto);
    
    this.carrinhoService.Mensagemconsole('Produto adicionado ao Carrinho');
   
   
    
   
    
  }
}

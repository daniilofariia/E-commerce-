import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CarrinhoService } from '../carrinho.service';
import { Produtos } from '../home/produtos/produtos.model';
import { ProdutosService } from '../home/produtos/service/produtos.service';
import  { MatSnackBar } from '@angular/material/snack-bar';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-produto',
  templateUrl: './produto.component.html',
  styleUrls: ['./produto.component.css']
})
export class ProdutoComponent implements OnInit {
 
  Produto: Produtos;
  displayedImg = 0;
  constructor(private router: Router,private ProdutosService: ProdutosService, private route: ActivatedRoute,private MatSnackBar: MatSnackBar
   ,private carrinhoService: CarrinhoService, private http: HttpClient ) { }
  
  ngOnInit(): void {
    const id = +this.route.snapshot.params['id']; 
       this.Produto = this.ProdutosService.getProduto(id);
    
       
  }
  adicionarAoCarrinho(Produto: Produtos){
    this.carrinhoService.adicionaritem(Produto);
    
    this.carrinhoService.Mensagemconsole('Produto adicionado ao Carrinho');
    this.router.navigateByUrl('/carrinho');
   
    
   
    
  }
  
  LimparCarrinho(Produto: Produtos){
    this.carrinhoService.removerItem(Produto)
    this.carrinhoService.Mensagemconsole('Carrinho Limpo');
  }

  vercarrinho(Produto: Produtos){
    window.location.reload();

  }
  



}

import { Router, ActivatedRoute } from '@angular/router';
import { ProductService } from './../product.service';
import { product, Product } from './../../products/product-create/product.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-delete',
  templateUrl: './product-delete.component.html',
  styleUrls: ['./product-delete.component.css']
})
export class ProductDeleteComponent implements OnInit {

  product: Product;
  constructor(
    private ProductService: ProductService,
     private router: Router,
     private route: ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.ProductService.readById(id!).subscribe(product =>{
      this.product = product
    })
  }
  deleteproduct(): void{
    this.ProductService.delete(this.product.id).subscribe(() =>{
      this.ProductService.showonsonole('Produto excluido com sucesso')
       

    this.router.navigate(['/products'])
  })
  }
  cancel(): void{
    this.router.navigate(['/products'])
  }
}

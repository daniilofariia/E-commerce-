
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from './../product.service';
import { Component, OnInit } from '@angular/core';
import { product } from './../../products/product-create/product.model';

@Component({
  selector: 'app-product-update',
  templateUrl: './product-update.component.html',
  styleUrls: ['./product-update.component.css']
})
export class ProductUpdateComponent implements OnInit {
  product: product = {
    id: Number(null),
    name: '',
    price: Number(null)
  }
 
  
  
 
  constructor(private productService: ProductService, 
    private router: Router, 
    private route :ActivatedRoute) { }
  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')
    this.productService.readById(id!).subscribe(product => {
      this.product = product
    });
  }
  updateproduct(): void{
    this.productService.update(this.product).subscribe(() =>{
      this.productService.showonsonole('Produto atualizado com sucesso!')
       this.router.navigate(['/products'])
    })

  }
  cancelproduct(): void{
    this.router.navigate(['/products'])

  }

}

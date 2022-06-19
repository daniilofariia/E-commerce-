import { Product } from './product.model';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ProductService } from './../../product/product.service';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
 
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {
  product: Product = {
    name: ' ',
    price: Number(null)

  }
  constructor(private productService: ProductService,
    private router: Router){}

  ngOnInit(): void {
   
  }

  createproduct(): void{
    this.productService.create(this.product).subscribe(()=>{
      this.productService.showonsonole('Produto criado !')
      this.router.navigate(['/products'])
    })
   
    }
   
  cancelproduct(): void{
     this.router.navigate(['/products'])
  
  }
}


/*
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ProductService } from './../../product/product.service';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
 
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {
  constructor(private productService: ProductService,
    private router: Router){}

  ngOnInit(): void {
   
  }

  createproduct(): void{
    this.productService.showonsonole('Produto criado');
 
    }
  

  
  cancelproduct(): void{
     this.router.navigate(['/products'])
  
  }
}
*/

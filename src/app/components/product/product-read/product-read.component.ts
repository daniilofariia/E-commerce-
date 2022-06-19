import { ProductService } from './../product.service';
import { Product } from './../../products/product-create/product.model';
import { Component, OnInit } from '@angular/core';
import { DataSource } from '@angular/cdk/collections';

@Component({
  selector: 'app-product-read',
  templateUrl: './product-read.component.html',
  styleUrls: ['./product-read.component.css']
})
export class ProductReadComponent implements OnInit {

products: Product[]
displayedColumns = ['id', 'name' , 'price','action']

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.productService.read().subscribe(products => {
      this.products = products 
      console.log(products)
    })

  }
  

}

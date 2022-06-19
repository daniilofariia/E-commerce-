import { clientesservice } from './cliente.service';
import { cliente } from './../create-cliente/clientes.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cliente-read',
  templateUrl: './cliente-read.component.html',
  styleUrls: ['./cliente-read.component.css']
})
export class ClienteReadComponent implements OnInit {

  clientes: cliente []
  displayedColumns = ['id','nome','email','cpf','endereco','celular','estado','action'];
  
    constructor(private clientesservice: clientesservice) { }
  
  ngOnInit(): void {
    this.clientesservice.read().subscribe(clientes =>{
      this.clientes = clientes
     
    })
     
      }
  
    }
    
 
 
import { clientesservice } from './../cliente-read/cliente.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { cliente } from './clientes.model';

@Component({
  selector: 'app-create-cliente',
  templateUrl: './create-cliente.component.html',
  styleUrls: ['./create-cliente.component.css']
})
export class CreateClienteComponent implements OnInit {

  cliente: cliente = {

    nome: '',
    nasc: '',
    email:'',
    cpf: '',
    endereco: '',
    celular: '',
    estado: ''

  
}

  constructor(private clientesservice: clientesservice, private router: Router) { }

  ngOnInit(): void {
  }
  createcliente(): void {
    this.clientesservice.create(this.cliente).subscribe(() =>{
      this.clientesservice.mensagem('Cliente cadastrado !')
      this.router.navigate(['clientes'])
    })
   
  }
  cancelarnovocliente(): void {
    this.router.navigate(['clientes'])
  }
}

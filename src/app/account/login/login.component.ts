import { clientesservice } from 'src/app/components/clientes/cliente-read/cliente.service';
import { Router, ActivatedRoute } from '@angular/router';


import { Component, OnInit } from '@angular/core';
import { cliente } from 'src/app/components/clientes/create-cliente/clientes.model';





@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  clientes: cliente = {
    cpf: (null),
    email: '',
    nasc: '',
    nome: '',
    celular: '',
    endereco: '',
    estado: '',
  }

  constructor(private clientesservice: clientesservice,
    private Router: Router, 
    private route :ActivatedRoute
    ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')
    this.clientesservice.readById(id!).subscribe(cliente => {
      this.clientes = cliente
    });
  }
  updatecliente(): void{
    this.clientesservice.update(this.clientes).subscribe(() =>{
      this.clientesservice.mensagem('Cliente atualizado com sucesso!')
       this.Router.navigate(['/clientes'])
    });
  }
  cancelcliente(): void{
    this.Router.navigate(['/clientes']);

  }
}

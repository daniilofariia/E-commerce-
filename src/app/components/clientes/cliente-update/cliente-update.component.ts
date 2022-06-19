import { ActivatedRoute, Router } from '@angular/router';
import { clientesservice } from './../cliente-read/cliente.service';
import { cliente } from './../create-cliente/clientes.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cliente-update',
  templateUrl: './cliente-update.component.html',
  styleUrls: ['./cliente-update.component.css']
})
export class ClienteUpdateComponent implements OnInit {
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
    private router: Router, 
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
       this.router.navigate(['/clientes'])
    });
  }
  cancelcliente(): void{
    this.router.navigate(['/clientes']);

  }
}


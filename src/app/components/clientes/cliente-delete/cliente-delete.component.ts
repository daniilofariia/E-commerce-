import { cliente } from './../create-cliente/clientes.model';
import { clientesservice } from './../cliente-read/cliente.service';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-cliente-delete',
  templateUrl: './cliente-delete.component.html',
  styleUrls: ['./cliente-delete.component.css']
})
export class ClienteDeleteComponent implements OnInit {

  cliente: cliente;
  constructor(
    private clientesservice: clientesservice,
     private router: Router,
     private route: ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.clientesservice.readById(id!).subscribe(cliente =>{
      this.cliente = cliente
    })
  }
  deletarcliente(): void{
    this.clientesservice.delete(this.cliente.id).subscribe(() =>{
      this.clientesservice.mensagem('cliente excluido com sucesso')
       

    this.router.navigate(['/clientes'])
  })
  }
  cancelcliente(): void{
    this.router.navigate(['/clientes'])
  }
}

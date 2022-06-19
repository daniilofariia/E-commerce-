import { headerService } from './../../conponents/template/header/header.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'

@Component({
  selector: 'app-cadastro-cliente',
  templateUrl: './cadastro-cliente.component.html',
  styleUrls: ['./cadastro-cliente.component.css']
})
export class CadastroClienteComponent implements OnInit {

  constructor(private router: Router, private headerService: headerService) { 
    headerService.headerData = {
      title: 'Novos cliente',
      icon: 'group_add',
      routeUrl: 'clientes'
    }
  }

  ngOnInit(): void {
  }

navigatetonovocliente(): void{
 this.router.navigate(['/clientes/create'])

}
}

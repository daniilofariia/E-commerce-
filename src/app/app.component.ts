import { Component } from '@angular/core';
import { CarrinhoService } from './carrinho.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 
  nome = 'Danilo';

  usuario = {
    login: ' ',
    senha: ' '
  };

  }


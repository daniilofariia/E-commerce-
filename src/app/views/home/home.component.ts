import { headerService } from './../../conponents/template/header/header.service';
import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private headerService: headerService) { 
    headerService.headerData = {
      title: 'Inicio',
      icon: 'home',
      routeUrl: ' '
    }
   
  }

  ngOnInit(): void {
  }

 mostrarDropdown(): void {
    document.getElementsByClassName("menudropdown-conteudo")[0].classList.toggle("mostrarMenuDropdown");}
 onclick=function(event){
    if(!event.target.matches('.btndropdown')){
      var dropdowns=document.getElementsByClassName("menudropdown-conteudo");
      var i;
      for(i=0;i<dropdowns.length;i++){
        var abertodropdown=dropdowns[i];
      
      if(abertodropdown.classList.contains('mostrarMenuDropdown')){
        abertodropdown.classList.remove('mostrarMenuDropdown');
  
      }
  }
    }
  }

}

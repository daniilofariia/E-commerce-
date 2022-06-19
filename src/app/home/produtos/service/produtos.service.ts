import { Injectable } from "@angular/core";
import { Produtos } from "../produtos.model";

@Injectable({
    providedIn: 'root'
})
export class ProdutosService{
    Produtos: Produtos[] = [ 
        new Produtos (1,
            'Kit Perifericos Gamer', ' O melhor computador gamer com uma das maiores tecnologias Intel',
            2500,
            1,
            ['/assets/imgs/s19.jpg','/assets/imgs/s19.jpg','/assets/imgs/s19.jpg']
             ),
             new Produtos (2,
                'Mouse Raddragon ', '  O melhor mouse gamer para jogos em fps ',
                253,
                1,
                ['/assets/imgs/s20.jpg','/assets/imgs/s20.jpg','/assets/imgs/s20.jpg']
                 ),
                 new Produtos (3,
                    'Kit Ryzen 5550 ', '  O melhor Teclado gamer mecanico para jogos em fps ',
                    450,
                    1,
                    ['/assets/imgs/s21.jpg','/assets/imgs/s22.jpg','/assets/imgs/s18.jpg']
                     ),   new Produtos (4,
                        'Pc gamer i7', ' O melhor computador gamer com uma das maiores tecnologias Intel',
                        2350,
                        1,
                        ['/assets/imgs/s6.jpg','/assets/imgs/s6.jpg','/assets/imgs/s5.jpg']
                         ),
                         new Produtos (5,
                            'Mouse Raddragon ', '  O melhor mouse gamer para jogos em fps ',
                            158,
                            1,
                            ['/assets/imgs/s14.jpg','/assets/imgs/s16.jpg','/assets/imgs/s14.jpg']
                             ),
                             new Produtos (6,
                                'Kit Ryzen 5550 ', '  O melhor Teclado gamer mecanico para jogos em fps ',
                                450,
                                1,
                                ['/assets/imgs/s21.jpg','/assets/imgs/s22.jpg','/assets/imgs/s18.jpg']
                                 )
    ]

constructor() {}

getProdutos(){
    return this.Produtos;
}
getProduto(id: number){
    return this.Produtos.find(Produto=>
        Produto.id === id);
        
}

}
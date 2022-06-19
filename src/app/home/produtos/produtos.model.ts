export class Produtos {
    constructor (
        public id: number,
        public nome : string,
        public descricao: string,
        public preco: number, public quantidade: number,
        public imagemUrls: string[]
    ){}
}
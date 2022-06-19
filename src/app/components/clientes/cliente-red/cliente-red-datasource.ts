import { cliente } from './../create-cliente/clientes.model';

import { DataSource } from '@angular/cdk/collections';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { map } from 'rxjs/operators';
import { Observable, of as observableOf, merge } from 'rxjs';



// TODO: replace this with real data from your application
const EXAMPLE_DATA: cliente[] = [
  {id: 1, nome: 'Hydrogen',cpf:'154864648',email:'Danilo@hotmail.com',nasc:'18/04/1596',celular:'35154866',endereco:'Rua vinte de novembro',estado:'Sp'},
  {id: 2, nome: 'Helium',cpf:'154864648',email:'Danilo@hotmail.com',nasc:'18/04/1596',celular:'35154866',endereco:'Rua vinte de novembro',estado:'Sp'},
  {id: 3, nome: 'Lithium',cpf:'154864648',email:'Danilo@hotmail.com',nasc:'18/04/1596',celular:'35154866',endereco:'Rua vinte de novembro',estado:'Sp'},
  {id: 4, nome: 'Beryllium',cpf:'154864648',email:'Danilo@hotmail.com',nasc:'18/04/1596',celular:'35154866',endereco:'Rua vinte de novembro',estado:'Sp'},
  {id: 5, nome: 'Boron',cpf:'154864648',email:'Danilo@hotmail.com',nasc:'18/04/1596',celular:'35154866',endereco:'Rua vinte de novembro',estado:'Sp'},
  {id: 6, nome: 'Carbon',cpf:'154864648',email:'Danilo@hotmail.com',nasc:'18/04/1596',celular:'35154866',endereco:'Rua vinte de novembro',estado:'Sp'},
  {id: 7, nome: 'Nitrogen',cpf:'154864648',email:'Danilo@hotmail.com',nasc:'18/04/1596',celular:'35154866',endereco:'Rua vinte de novembro',estado:'Sp'},
  {id: 8, nome: 'Oxygen',cpf:'154864648',email:'Danilo@hotmail.com',nasc:'18/04/1596',celular:'35154866',endereco:'Rua vinte de novembro',estado:'Sp'},
  {id: 9, nome: 'Fluorine',cpf:'154864648',email:'Danilo@hotmail.com',nasc:'18/04/1596',celular:'35154866',endereco:'Rua vinte de novembro',estado:'Sp'},
  {id: 10, nome: 'Neon',cpf:'154864648',email:'Danilo@hotmail.com',nasc:'18/04/1596',celular:'35154866',endereco:'Rua vinte de novembro',estado:'Sp'},
  {id: 11, nome: 'Sodium',cpf:'154864648',email:'Danilo@hotmail.com',nasc:'18/04/1596',celular:'35154866',endereco:'Rua vinte de novembro',estado:'Sp'},
  {id: 12, nome: 'Magnesium',cpf:'154864648',email:'Danilo@hotmail.com',nasc:'18/04/1596',celular:'35154866',endereco:'Rua vinte de novembro',estado:'Sp'},
  {id: 13, nome: 'Aluminum',cpf:'154864648',email:'Danilo@hotmail.com',nasc:'18/04/1596',celular:'35154866',endereco:'Rua vinte de novembro',estado:'Sp'},
  {id: 14, nome: 'Silicon',cpf:'154864648',email:'Danilo@hotmail.com',nasc:'18/04/1596',celular:'35154866',endereco:'Rua vinte de novembro',estado:'Sp'},
  {id: 15, nome: 'Phosphorus',cpf:'154864648',email:'Danilo@hotmail.com',nasc:'18/04/1596',celular:'35154866',endereco:'Rua vinte de novembro',estado:'Sp'},
  {id: 16, nome: 'Sulfur',cpf:'154864648',email:'Danilo@hotmail.com',nasc:'18/04/1596',celular:'35154866',endereco:'Rua vinte de novembro',estado:'Sp'},
  {id: 17, nome: 'Chlorine',cpf:'154864648',email:'Danilo@hotmail.com',nasc:'18/04/1596',celular:'35154866',endereco:'Rua vinte de novembro',estado:'Sp'},
  {id: 18, nome: 'Argon',cpf:'154864648',email:'Danilo@hotmail.com',nasc:'18/04/1596',celular:'35154866',endereco:'Rua vinte de novembro',estado:'Sp'},
  {id: 19, nome: 'Potassium',cpf:'154864648',email:'Danilo@hotmail.com',nasc:'18/04/1596',celular:'35154866',endereco:'Rua vinte de novembro',estado:'Sp'},
  {id: 20, nome: 'Calcium',cpf:'154864648',email:'Danilo@hotmail.com',nasc:'18/04/1596',celular:'35154866',endereco:'Rua vinte de novembro',estado:'Sp'},
];

/**
 * Data source for the ClienteRed view. This class should
 * encapsulate all logic for fetching and manipulating the displayed data
 * (including sorting, pagination, and filtering).
 */
export class ClienteRedDataSource extends DataSource<cliente> {
  data: cliente[] = EXAMPLE_DATA;
  paginator: MatPaginator;
  sort: MatSort;

  constructor() {
    super();
  }

  /**
   * Connect this data source to the table. The table will only update when
   * the returned stream emits new items.
   * @returns A stream of the items to be rendered.
   */
  connect(): Observable<cliente[]> {
    if (this.paginator && this.sort) {
      // Combine everything that affects the rendered data into one update
      // stream for the data-table to consume.
      return merge(observableOf(this.data), this.paginator.page, this.sort.sortChange)
        .pipe(map(() => {
          return this.getPagedData(this.getSortedData([...this.data ]));
        }));
    } else {
      throw Error('Please set the paginator and sort on the data source before connecting.');
    }
  }

  /**
   *  Called when the table is being destroyed. Use this function, to clean up
   * any open connections or free any held resources that were set up during connect.
   */
  disconnect(): void {}

  /**
   * Paginate the data (client-side). If you're using server-side pagination,
   * this would be replaced by requesting the appropriate data from the server.
   */
  private getPagedData(data: cliente[]): cliente[] {
    if (this.paginator) {
      const startIndex = this.paginator.pageIndex * this.paginator.pageSize;
      return data.splice(startIndex, this.paginator.pageSize);
    } else {
      return data;
    }
  }

  /**
   * Sort the data (client-side). If you're using server-side sorting,
   * this would be replaced by requesting the appropriate data from the server.
   */
  private getSortedData(data: cliente[]): cliente[] {
    if (!this.sort || !this.sort.active || this.sort.direction === '') {
      return data;
    }

    return data.sort((a, b) => {
      const isAsc = this.sort?.direction === 'asc';
      switch (this.sort?.active) {
        case 'nome': return compare(a.nome, b.nome, isAsc);
        case 'id': return compare(+a.id, +b.id, isAsc);
        default: return 0;
      }
    });
  }
}

/** Simple sort comparator for example ID/Name columns (for client-side sorting). */
function compare(a: string | number, b: string | number, isAsc: boolean): number {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}

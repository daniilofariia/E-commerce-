import { cliente } from './../create-cliente/clientes.model';
import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { ClienteRedDataSource } from './cliente-red-datasource';

@Component({
  selector: 'app-cliente-red',
  templateUrl: './cliente-red.component.html',
  styleUrls: ['./cliente-red.component.css']
})
export class ClienteRedComponent implements AfterViewInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatTable) table!: MatTable<cliente>;
  dataSource: ClienteRedDataSource;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['id','nome', 'cpf','email','nasc','celular','endereco','estado'];

  constructor() {
    this.dataSource = new ClienteRedDataSource();
  }

  ngAfterViewInit(): void {
 //   this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
  }
}

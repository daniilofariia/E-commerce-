import { LoadingService } from './views/Services/loading.service';
import { NgModule, LOCALE_ID } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './conponents/template/header/header.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { FooterComponent } from './components/template/footer/footer.component';
import { NavComponent } from './components/template/nav/nav.component';
import { MatSidenavModule } from '@angular/material/sidenav'
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button'
import { MatSnackBarModule } from '@angular/material/snack-bar'
import { MatListModule } from '@angular/material/list';
import { HomeComponent } from './views/home/home.component';
import { ProductCrudComponent } from './views/product-crud/product-crud.component';
import { RedDirective } from './directives/red.directive';
import { ProductCreateComponent } from './components/products/product-create/product-create.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule } from '@angular/forms'
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatInputModule } from '@angular/material/input';
import { ProductReadComponent } from './components/product/product-read/product-read.component';
import { ProductRead2Component } from './components/product/product-read2/product-read2.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import localept from '@angular/common/locales/pt';
import { registerLocaleData } from '@angular/common';
import { ProductUpdateComponent } from './components/product/product-update/product-update.component';
import { ProductDeleteComponent } from './components/product/product-delete/product-delete.component';
import { LoginComponent } from './account/login/login.component';
import { MenuFixoTopComponent } from './views/menu-fixo-top/menu-fixo-top.component';
import { MatMenuModule } from '@angular/material/menu';
import { ProdutosComponent } from './home/produtos/produtos.component';
import { CarrocelComponent } from './home/carrocel/carrocel.component';
import { CadastroClienteComponent } from './components/clientes/cadastro-cliente.component';
import { ClienteReadComponent } from './components/clientes/cliente-read/cliente-read.component';
import { CreateClienteComponent } from './components/clientes/create-cliente/create-cliente.component';
import { ClienteRedComponent } from './components/clientes/cliente-red/cliente-red.component';
import { ClienteUpdateComponent } from './components/clientes/cliente-update/cliente-update.component';
import { ClienteDeleteComponent } from './components/clientes/cliente-delete/cliente-delete.component';
import { CreateAccountComponent } from './account/create-account/create-account.component';
import { AuthenticationComponent } from './layout/authentication/authentication.component';
import { HomeAuthComponent } from './layout/home-auth/home-auth.component';
import { LoginUsuarioComponent } from './account/login-usuario/login-usuario.component';
import { CarrinhoComponent } from './carrinho/carrinho.component';
import { ProdutoComponent } from './produto/produto.component';
import { GooglePayButtonModule } from '@google-pay/button-angular';
import { PagamentogoogleComponent } from './pagamentogoogle/pagamentogoogle.component';

import { MatProgressBarModule } from '@angular/material/progress-bar';
import { LoadingComponent } from './loading/loading.component';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { LoadingInterceptor } from './core/interceptors/loading.interceptor';
import { AtendimentoComponent } from './atendimento/atendimento.component';




registerLocaleData(localept);




@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavComponent,
    HomeComponent,
    ProductCrudComponent,
    RedDirective,
    ProductCreateComponent,
    ProductReadComponent,
    ProductRead2Component,
    ProductUpdateComponent,
    ProductDeleteComponent,
    LoginComponent,
    MenuFixoTopComponent,
    ProdutosComponent,
    CarrocelComponent,
    CadastroClienteComponent,
    ClienteReadComponent,
    CreateClienteComponent,
    ClienteRedComponent,
    ClienteUpdateComponent,
    ClienteDeleteComponent,
    CreateAccountComponent,
    AuthenticationComponent,
    HomeAuthComponent,
    LoginUsuarioComponent,
    CarrinhoComponent,
    ProdutoComponent,
    PagamentogoogleComponent,
    LoadingComponent,
    AtendimentoComponent,
    
    










  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatCardModule,
    MatButtonModule,
    MatSnackBarModule,
    HttpClientModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatMenuModule,
    MatProgressBarModule,
    GooglePayButtonModule,
    MatProgressSpinnerModule


  ],
  providers: [
    , {
      provide: LOCALE_ID,
      useValue: 'pt-BR'
    },{ provide:HTTP_INTERCEPTORS,
      useClass: LoadingInterceptor,
      multi:true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

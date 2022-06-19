import { MatListModule } from '@angular/material/list';
import { MatFormFieldModule} from '@angular/material/form-field';
import { CreateAccountComponent } from './account/create-account/create-account.component';
import { ClienteDeleteComponent } from './components/clientes/cliente-delete/cliente-delete.component';
import { ClienteUpdateComponent } from './components/clientes/cliente-update/cliente-update.component';
import { ProductDeleteComponent } from './components/product/product-delete/product-delete.component';
import { ProductUpdateComponent } from './components/product/product-update/product-update.component';
import { ProductCreateComponent } from './components/products/product-create/product-create.component';
import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './views/home/home.component';
import { ProductCrudComponent } from './views/product-crud/product-crud.component'
import { LoginComponent } from './account/login/login.component';
import { CadastroClienteComponent } from './components/clientes/cadastro-cliente.component';
import { CreateClienteComponent } from './components/clientes/create-cliente/create-cliente.component';
import { HomeAuthComponent } from './layout/home-auth/home-auth.component';
import { AuthenticationComponent } from './layout/authentication/authentication.component';
import { AuthGuard } from './account/shared/auth.guard';
import { LoginUsuarioComponent } from './account/login-usuario/login-usuario.component';
import { ProdutosComponent } from './home/produtos/produtos.component';
import { ProdutoComponent } from './produto/produto.component';
import { CarrinhoComponent } from './carrinho/carrinho.component';
import { PagamentogoogleComponent } from './pagamentogoogle/pagamentogoogle.component';
import { AtendimentoComponent } from './atendimento/atendimento.component';

const routes: Routes = [{
  path: "",
component: HomeComponent,
},
{
  path: "homeauth",
component: HomeAuthComponent,
children: [  
  {
    path: "clientes",
    component: CadastroClienteComponent,
    },

  {
    path: "products",
    component: ProductCrudComponent,
    },
    
  // rota de autenticacao
],

canActivate: [AuthGuard]},
{
  path: '',
  component: AuthenticationComponent,
  children: [
    {
      path: '', redirectTo: 'login', pathMatch:'full'
    }, 
    {
      path: "login",
      component: LoginUsuarioComponent,
      },
  
    {
      path: "create-account",
      component: CreateAccountComponent,
      },
      
  ]
}
 // rota de login 
,
{
  path: "login",
  component: LoginComponent,
  } ,
{
  path: "product/delete/:id",
  component: ProductDeleteComponent,
  },
{
  path: "product/create",
  component: ProductCreateComponent,
},
{
path: "product/update/:id",
component: ProductUpdateComponent,
},

// rotas em clientes


{
path: "clientes/create",
component: CreateClienteComponent,
},

{     
path: "clientes/update/:id",
component: ClienteUpdateComponent,
},


{     
path: "clientes/delete/:id",
component: ClienteDeleteComponent,
},
// rota dos produtos

{     
  path: '',
  component: ProdutosComponent,
  },
  {     
    path: "Produtos",
    component: ProdutosComponent,
    }
    ,
  {     
    path: "Produtos/:id",
    component: ProdutoComponent,
    },
    
    {     
      path: "carrinho",
      component: CarrinhoComponent,
      },

      {     
        path: "pagamento",
        component: PagamentogoogleComponent,
        },
        

      {     
        path: "atendimento",
        component: AtendimentoComponent,
        },

{ path: '**', redirectTo: '' },



];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule,],
  
})
export class AppRoutingModule { }

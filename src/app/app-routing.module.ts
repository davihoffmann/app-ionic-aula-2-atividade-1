import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'pessoa', loadChildren: './pessoa/pessoa.module#PessoaPageModule' },
  { path: 'pessoa-detalhe', loadChildren: './pessoa-detalhe/pessoa-detalhe.module#PessoaDetalhePageModule' },
  { path: 'login', loadChildren: './login/login.module#LoginPageModule' },
  { path: 'esqueceu-senha', loadChildren: './esqueceu-senha/esqueceu-senha.module#EsqueceuSenhaPageModule' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

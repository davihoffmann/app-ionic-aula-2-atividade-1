import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { PessoaDetalhePage } from './pessoa-detalhe.page';

const routes: Routes = [
  {
    path: '',
    component: PessoaDetalhePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [PessoaDetalhePage]
})
export class PessoaDetalhePageModule {}

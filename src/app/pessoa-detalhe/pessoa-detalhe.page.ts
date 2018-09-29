import { PessoaService } from './../pessoa.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pessoa-detalhe',
  templateUrl: './pessoa-detalhe.page.html',
  styleUrls: ['./pessoa-detalhe.page.scss'],
})
export class PessoaDetalhePage implements OnInit {

  pessoa: any;
  constructor(private pessoaService: PessoaService, private router: Router) { }

  ngOnInit() {
    this.pessoa = this.pessoaService.currentPessoa;

  }

}

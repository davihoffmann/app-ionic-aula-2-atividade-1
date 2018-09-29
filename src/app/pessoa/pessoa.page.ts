import { PessoaService } from './../pessoa.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pessoa',
  templateUrl: './pessoa.page.html',
  styleUrls: ['./pessoa.page.scss'],
})
export class PessoaPage implements OnInit {

  data:any;
  constructor(private pessoaService: PessoaService, private router: Router) { }

  ngOnInit() {
    console.log("aqui");
    this.pessoaService.getPessoas('pessoas').subscribe(data => {
      this.data = data;
    });
  }

  showPessoaDetail(pessoa) {
    this.pessoaService.currentPessoa = pessoa;
    this.router.navigate(['/pessoa-detalhe']);
  }

}

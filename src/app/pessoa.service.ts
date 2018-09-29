import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PessoaService {

  currentPessoa: any;

  constructor(private http: HttpClient) { }

  getPessoas(url) {
    return this.http.get('https://my-json-server.typicode.com/davihoffmann/trabalho-api-test/pessoas');
  }
}

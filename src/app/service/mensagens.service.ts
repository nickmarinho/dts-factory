import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Mensagem, Mensagens } from './mensagens';

@Injectable()
export class MensagensService {
  constructor(private httpService: HttpClient) { }

  headers = new HttpHeaders({
    'Content-Type': 'application/json'
  });

  public getMensagens(): Observable<Mensagens> {
    return this.httpService.get<Mensagens>('./assets/menu.json');
  }

  public addMensagem(mensagem: Mensagem) {
    return this.httpService.post('./assets/menu.json', JSON.stringify(mensagem), {headers: this.headers});
  }
}

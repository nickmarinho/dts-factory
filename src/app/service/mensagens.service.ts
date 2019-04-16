import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Mensagens } from './mensagens';

@Injectable()
export class MensagensService {
  constructor(private httpService: HttpClient) { }

  public getMensagens() {
    return this.httpService
    .get('./assets/menu.json')
    .subscribe(data => {
      return data as Mensagens;
    },
    (err: HttpErrorResponse) => {
      console.log ('getMensagens.error', err.message);
    });
  }

}

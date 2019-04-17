import { Component } from '@angular/core';
import { Mensagem } from './service/mensagens';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'dts-factory';
  mensagem: Mensagem;
  refreshMenu = false;

  public exibirMensagem(mensagem: Mensagem) {
    this.mensagem = mensagem;
  }

  public atualizarMenu() {
    console.log('atualizarMenu');

    this.refreshMenu = true;
  }

}

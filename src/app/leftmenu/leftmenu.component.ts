import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { Mensagens } from '../service/mensagens';
import { MensagensService } from '../service/mensagens.service';

@Component({
  selector: 'app-leftmenu',
  templateUrl: './leftmenu.component.html',
  styleUrls: ['./leftmenu.component.sass']
})
export class LeftmenuComponent implements OnInit {
  matMenuTriggerFor = 'menu';
  menu: Observable<Mensagens>;

  constructor(
    private mensagensService: MensagensService
  ) {
  }

  @Output()
    exibirMensagemEmitter: EventEmitter<string> = new EventEmitter();

  ngOnInit() {
    this.configurarMenu();
  }

  public exibirMensagem(mensagem) {
    this.exibirMensagemEmitter.emit(mensagem);
  }

  public configurarMenu() {
    this.menu = this.mensagensService.getMensagens();
  }

}

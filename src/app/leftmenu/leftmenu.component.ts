import { Component, EventEmitter, OnInit, Output, Input, OnChanges } from '@angular/core';
import { Observable } from 'rxjs';
import { Mensagens } from '../service/mensagens';
import { MensagensService } from '../service/mensagens.service';

@Component({
  selector: 'app-leftmenu',
  templateUrl: './leftmenu.component.html',
  styleUrls: ['./leftmenu.component.sass']
})
export class LeftmenuComponent implements OnInit, OnChanges {
  matMenuTriggerFor = 'menu';
  menu: Observable<Mensagens>;

  constructor(
    private mensagensService: MensagensService
  ) {
  }

  @Input()
    refreshMenu: boolean;

  @Output()
    exibirMensagemEmitter: EventEmitter<string> = new EventEmitter();

  @Output()
    resetRefreshMenu: EventEmitter<string> = new EventEmitter();

  ngOnInit() {
    this.configurarMenu();
  }

  ngOnChanges() {
    if (this.refreshMenu) {
      this.configurarMenu();
      this.resetRefreshMenu.emit();
    }
  }

  public exibirMensagem(mensagem) {
    this.exibirMensagemEmitter.emit(mensagem);
  }

  public configurarMenu() {
    console.log('this.refreshMenu 1', this.refreshMenu);
    this.menu = this.mensagensService.getMensagens();
    console.log('this.refreshMenu 2', this.refreshMenu);
  }

}

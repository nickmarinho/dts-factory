import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Mensagem } from '../service/mensagens';
import { MensagensService } from '../service/mensagens.service';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.sass']
})
export class ContentComponent implements OnInit {

  constructor(private mensagensService: MensagensService) { }

  @Input()
    mensagem: Mensagem;

  @Output()
    atualizarMenuEmitter: EventEmitter<string> = new EventEmitter();

  ngOnInit() {
  }

  public exibirMensagem(mensagem: Mensagem) {
    this.mensagem = mensagem;
  }

  public excluirMensagem(mensagem: Mensagem) {
    this.mensagensService.excluirMensagem(mensagem);
    this.atualizarMenuEmitter.emit();
  }

}

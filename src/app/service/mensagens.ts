export interface Mensagens {
  Mensagem: Array<Mensagem>;
}

export interface Mensagem {
  id: number;
  Nome: string;
  Email: string;
  Assunto: string;
  Telefone: string;
  Titulo: string;
  Mensagem: string;
  DataHora: string;
}

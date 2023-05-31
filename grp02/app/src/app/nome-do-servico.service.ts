import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NomeDoServicoService {

  constructor() { }

  // Adicione métodos e lógica do serviço aqui
  meuMetodo() {
    // Lógica do serviço
    console.log('Método do serviço foi chamado.');
  }
}

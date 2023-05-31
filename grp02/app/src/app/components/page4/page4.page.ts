import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page4',
  templateUrl: './page4.page.html',
  styleUrls: ['./page4.page.scss'],
})
export class PAGE4Page implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  listaItens: string[] = [];


  adicionarItem() {
    const novoItem = 'Novo Item' + (this.listaItens.length + 1);

    this.listaItens.push(novoItem);
  }

  arrayDados: any[] = [
    { titulo: 'Card 1', descricao: 'Descrição do Card 1' },
    { titulo: 'Card 2', descricao: 'Descrição do Card 2' },
    { titulo: 'Card 3', descricao: 'Descrição do Card 3' }
  ];
}

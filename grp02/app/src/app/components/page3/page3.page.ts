import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-page3',
  templateUrl: './page3.page.html',
  styleUrls: ['./page3.page.scss'],
})
export class PAGE3Page implements OnInit {

  constructor(private navCtrl: NavController) { }

  ngOnInit() {
  }

  botaoClicado(){
    this.navCtrl.navigateForward('/page4');
    const nome_informado = document.getElementById('input');
    console.log(nome_informado);
  }
  nome: string = '';
  registros: string[] = [];

  adicionarRegistro() {
    if (this.nome) {
      this.registros.push(this.nome);
      this.nome = ''; // Limpar o campo de nome após adicionar o registro
    }
  }

}

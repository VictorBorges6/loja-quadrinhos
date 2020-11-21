import { AbaService, ABA_LISTA, ABA_FINALIZACAO } from './services/aba.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
/**
 * Classe principal, responsável por conter os outros components.
 */
export class AppComponent {
  title: string = "HQ'S DA MARVEL";
  abaAnterior: string = '';

  constructor(public abaService: AbaService) {}

  changeIsFinalizacao(): void
  {
    if (this.abaService.getAba() == ABA_FINALIZACAO) {
      this.abaService.setAba(this.abaAnterior);
    } else {
      this.abaAnterior = this.abaService.getAba();
      this.abaService.setAba(ABA_FINALIZACAO);
    }
  }
}
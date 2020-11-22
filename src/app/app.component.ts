import { ComicsService } from './services/comics.service';
import { AbaService, ABA_LISTA, ABA_FINALIZACAO, ABA_DETALHES } from './services/aba.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
/**
 * Classe principal, responsável por conter os outros components.
 */
export class AppComponent implements OnInit {
  title: string = "HQ'S DA MARVEL";
  abaAnterior: string = '';

  constructor(public abaService: AbaService, private comicService: ComicsService) {}

  ngOnInit(): void {
    this.abaService.setAba(ABA_LISTA);
    this.comicService.setRaridade(Math.floor(Math.random() * 10));
  }

  changeIsFinalizacao(): void  {
    if (this.abaService.getAba() == ABA_FINALIZACAO) {
      this.abaService.setAba(this.abaAnterior);
    } else {
      this.abaAnterior = this.abaService.getAba();
      this.abaService.setAba(ABA_FINALIZACAO);
    }
  }
}
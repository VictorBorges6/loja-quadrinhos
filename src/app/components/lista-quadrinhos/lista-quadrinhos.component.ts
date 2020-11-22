import { AbaService, ABA_DETALHES } from './../../services/aba.service';
import { ComicsService } from './../../services/comics.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lista-quadrinhos',
  templateUrl: './lista-quadrinhos.component.html',
  styleUrls: ['./lista-quadrinhos.component.css']
})

/**
 * Classe responsável por listar os quadrinhos, com opção de pesquisar pelo título.
 */
export class ListaQuadrinhosComponent implements  OnInit
{
  inputPesquisa: string = '';
  mostraErro: boolean = false;
  carregando: boolean = true;
  listaComics = null;

  constructor(private comicService: ComicsService, private abaService: AbaService) {}

  ngOnInit(): void
  {
    this.pesquisarQuadrinhos();
  }

  onContainerScroll($event) 
  {
    let pos = ($event.target.scrollTop) + $event.target.offsetHeight;
    let max = $event.target.scrollHeight;
    if(pos == max )   {
      this.pesquisarMaisQuadrinhos();
    }
  }

  pesquisarQuadrinhos(): void
  {
    this.comicService.setQuantidadeItensMostrados(0);
    this.carregando = true;
    this.listaComics = this.comicService.getListaComics(this.inputPesquisa).subscribe(
      comics => {
        if(comics.data.results.length == 0) {
          this.mostraErro = true;
        } else {
          this.mostraErro = false;
        }
        this.listaComics = comics.data.results;
        this.comicService.setQuantidadeItensMostrados(this.listaComics.length);
        this.listaComics.forEach(comic => {
          let lastIdDigit = Number(comic.id.toString().split('').pop());
          if (lastIdDigit == this.comicService.getRaridade()) {
            comic.raro = true;
          } else {
            comic.raro = false;
          }
      });
        this.carregando = false;
      }
    );
  }

  pesquisarMaisQuadrinhos(): void
  {
    this.carregando = true;
    let listaComicsOffset = this.comicService.getListaComics(this.inputPesquisa).subscribe(
      comics => {
        if(comics.data.results.length == 0) {
          this.mostraErro = true;
        } else {
          this.mostraErro = false;
        }
        comics.data.results.forEach(comic => {
          this.listaComics.push(comic);
          let lastIdDigit = Number(comic.id.toString().split('').pop());
          if (lastIdDigit == this.comicService.getRaridade()) {
            comic.raro = true;
          } else {
            comic.raro = false;
          }
        });
        this.comicService.setQuantidadeItensMostrados(this.listaComics.length);
        this.carregando = false;
      }
    );
  }

  selecionarComic(comic): void
  {
    this.comicService.setComic(comic);
    this.abaService.setAba(ABA_DETALHES);
  }

}
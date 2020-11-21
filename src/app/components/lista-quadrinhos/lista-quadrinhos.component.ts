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

    constructor(private comicService: ComicsService) {}

    ngOnInit(): void
    {
        this.listaComics = this.comicService.getListaComics().subscribe(
            comics => {
              if(comics.data.results.length == 0) {
                this.mostraErro = true;
              } else {
                this.mostraErro = false;
              }
              this.listaComics = comics.data.results;
              this.carregando = false;
            }
        );
    }

    pesquisarQuadrinhos(): void
    {
        this.carregando = true;
        this.listaComics = this.comicService.getListaComics(this.inputPesquisa).subscribe(
            comics => {
              if(comics.data.results.length == 0) {
                this.mostraErro = true;
              } else {
                this.mostraErro = false;
              }
              this.listaComics = comics.data.results;
              this.carregando = false;
            }
        );
    }

    selecionarComic(comic): void
    {
        this.comicService.setComic(comic);
    }

}
import { FinalizacaoCompraService } from './../../services/finalizacao-compra.service';
import { ComicsService } from './../../services/comics.service';
import { AbaService, ABA_LISTA } from './../../services/aba.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { formatCurrency } from '@angular/common';
import { Subject } from 'rxjs';
import { NgbAlert } from '@ng-bootstrap/ng-bootstrap';
import { debounceTime } from 'rxjs/operators';

const NAO_INFORMADO = 'Não informado'
@Component({
  selector: 'app-detalhes-quadrinhos',
  templateUrl: './detalhes-quadrinhos.component.html',
  styleUrls: ['./detalhes-quadrinhos.component.css']
})

/**
 * Classe responsável por mostrar os detalhes de um quadrinho específico,
 * assim como o botão de adicioná-lo ao carrinho de compras.
 */
export class DetalhesQuadrinhosComponent implements OnInit
{
  private _success = new Subject<string>();
  successMessage = '';

  @ViewChild('selfClosingAlert', {static: false}) selfClosingAlert: NgbAlert;

  constructor(private abaService: AbaService, public comicService: ComicsService, public finalizacaoService: FinalizacaoCompraService)
  { }

  ngOnInit(): void
  { 
    this._success.subscribe(message => this.successMessage = message);
    this._success.pipe(debounceTime(2000)).subscribe(() => {
      if (this.selfClosingAlert) {
        this.selfClosingAlert.close();
      }
    });
  }

  voltaTelaLista(): void
  {
    this.abaService.setAba(ABA_LISTA);
  }

  getTitulo(): string
  {
    return `<Strong>Título: &nbsp;</strong> ${this.comicService.getComic().title || NAO_INFORMADO}`;
  }

  getPersonagens(): string
  {
    let personagens: string[] = [];
    this.comicService.getComic().characters.items.forEach(personagem => {
      personagens.push(personagem.name);
    });

    const textoPersonagens: string = personagens.length > 0 ? personagens.join(", ") : NAO_INFORMADO
    return `<Strong>Personagens: &nbsp;</strong> ${textoPersonagens}`;
  }

  getCriadores(): string
  {
    let criadores = [];
    this.comicService.getComic().creators.items.forEach(criador => {
      criadores.push(`${criador.name} (${criador.role})`);
    });

    const textoCriadores: string = criadores.length > 0 ? criadores.join(", ") : NAO_INFORMADO
    return `<Strong>Criadores: &nbsp;</strong> ${textoCriadores}`;
  }

  getResumo(): string
  {
    return `<Strong>Resumo: &nbsp;</strong> ${this.comicService.getComic().textObjects.length > 0 ? this.comicService.getComic().textObjects[0].text : NAO_INFORMADO}`;
  }

  getPreco(): string
  {
    const preco = formatCurrency(Number(this.comicService.getComic().prices[0].price), 'en-us', '$');
    return `<Strong>Preço: &nbsp;</strong> ${preco}`;
  }

  adicionarCarrinho(): void
  {
    this.finalizacaoService.addListaItens(this.comicService.getComic());
    this._success.next(`Produto adicionado ao carrinho!`);
  }
}

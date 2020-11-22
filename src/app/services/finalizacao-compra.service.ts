import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
/**
 * Classe responsável por controlar a quantidade de quadrinhos e o total do carrinho de compras.
 */
export class FinalizacaoCompraService {

  private listaItens: any[] = [];
  private quantidadeItens: number = 0;
  private total: number = 0;
  constructor() { }

  getQuantidadeItens(): number
  {
    return this.quantidadeItens;
  }

  setQuantidadeItens(quantidade: number): void
  {
    this.quantidadeItens = quantidade;
  }

  addListaItens(comic): void
  {
    this.listaItens.push(comic);
    this.setQuantidadeItens(this.listaItens.length);
    this.setTotal(this.getTotal()+comic.prices[0].price);
  }

  removerItem(comic): void
  {
    const index: number = this.listaItens.indexOf(comic);
    if (index !== -1) {
      this.listaItens.splice(index, 1);
    }
    this.setQuantidadeItens(this.listaItens.length);
    this.setTotal(this.getTotal()-comic.prices[0].price);
  }

  getListaItens(): any[]
  {
    return this.listaItens;
  }

  setTotal(_total: number): void
  {
    this.total = _total;
  }

  getTotal(): number
  {
    return this.total;
  }

  zeraLista(): void
  {
    this.listaItens = [];
    this.quantidadeItens = 0;
    this.total = 0;
  }

}

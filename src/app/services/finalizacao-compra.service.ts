import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
/**
 * Classe responsável por controlar a quantidade de quadrinhos e o total do carrinho de compras.
 */
export class FinalizacaoCompraService {

  quantidadeItens: number = 0;
  constructor() { }

  getQuantidadeItens(): number
  {
    return this.quantidadeItens;
  }

  setQuantidadeItens(quantidade: number): void
  {
    this.quantidadeItens = quantidade;
  }
}

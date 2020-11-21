import { Injectable } from '@angular/core';

export const ABA_LISTA = 'lista';
export const ABA_DETALHES = 'detalhes';
export const ABA_FINALIZACAO = 'finalizacao';

@Injectable({
  providedIn: 'root'
})
/**
 * Classe responsável por armazenar a aba atual em que o usuário se encontra
 * e as constantes com os nomes de cada aba.
 */
export class AbaService {

  private aba: string = ABA_LISTA;
  constructor() { }

  setAba(_aba: string): void {
    this.aba = _aba;
  }

  getAba(): string {
    return this.aba;
  }
}

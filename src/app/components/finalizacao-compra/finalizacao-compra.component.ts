import { HttpClient } from '@angular/common/http';
import { formatCurrency } from '@angular/common';
import { FinalizacaoCompraService } from './../../services/finalizacao-compra.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Subject } from 'rxjs';
import { NgbAlert } from '@ng-bootstrap/ng-bootstrap';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-finalizacao-compra',
  templateUrl: './finalizacao-compra.component.html',
  styleUrls: ['./finalizacao-compra.component.css']
})

/**
 * Classe responsável por mostrar o carrinho de compras do usuário com seus totais,
 * aplicar cupom de desconto e finalizar a compra.
 */
export class FinalizacaoCompraComponent implements OnInit
{

  private _success = new Subject<string>();
  successMessage = '';
  private _danger = new Subject<string>();
  dangerMessage = '';
  codigoCupom: string = '';
  cupons: any[] = [];

  @ViewChild('selfClosingAlert', {static: false}) selfClosingAlert: NgbAlert;
  
  constructor(public finalizacaoService: FinalizacaoCompraService, private httpClient: HttpClient)
  { }

  ngOnInit(): void
  {
    this.httpClient.get("assets/cupons.json").subscribe(data =>{
      Object.keys(data).map((key) => {  
        this.cupons.push(data[key]);
      });
    });

    this._success.subscribe(message => this.successMessage = message);
    this._success.pipe(debounceTime(2000)).subscribe(() => {
      if (this.selfClosingAlert) {
        this.selfClosingAlert.close();
      }
    });

    this._danger.subscribe(message => this.dangerMessage = message);
    this._danger.pipe(debounceTime(2000)).subscribe(() => {
      if (this.selfClosingAlert) {
        this.selfClosingAlert.close();
      }
    });
  }

  getTextQuantidadeItens(): string
  {
    return `<strong>Quantidade total de itens: &nbsp;</strong> ${this.finalizacaoService.getQuantidadeItens()}`;
  }

  getTextTotal(): string
  {
    const total = formatCurrency(this.finalizacaoService.getTotal(), 'en-us', '$');
    return `<strong>Valor total: &nbsp;</strong> ${total}`;
  }

  removeItem(comic): void
  {
    this.finalizacaoService.removerItem(comic);
    this.getTextQuantidadeItens();
    this.getTextTotal();

    if (this.finalizacaoService.getQuantidadeItens() == 0) {
      this.resetaListaCupons();
    }
  }

  resetaListaCupons(): void
  {
    this.httpClient.get("assets/cupons.json").subscribe(data =>{
      Object.keys(data).map((key) => {  
        this.cupons.push(data[key]);
      });
    });
  }

  aplicaDesconto(): void
  {
    const cupomValido = this.cupons.find(cupom => cupom.cupom_codigo == this.codigoCupom);
    if (!!cupomValido) {
      this.removerCupom(cupomValido);
      this.setaDesconto(cupomValido);
      this._success.next(`Cupom aplicado com sucesso!`);
    } else {
      this._danger.next(`Cupom inválido!`);
    }
  }

  removerCupom(cupomValido): void
  {
    const index: number = this.cupons.indexOf(cupomValido);
    if (index !== -1) {
      this.cupons.splice(index, 1);
    }
  }

  finalizaCompra(): void
  {
    this.finalizacaoService.zeraLista();
    this.resetaListaCupons();
    this.codigoCupom = '';
    this._success.next(`Compra finalizada com sucesso!`);
  }

  setaDesconto(cupomValido): void
  {
    let novoTotal = this.finalizacaoService.getTotal()*(100-cupomValido.cupom_desconto)/100;
    if (novoTotal < 0) {
      novoTotal = 0;
    }
    this.finalizacaoService.setTotal(novoTotal);
  }
}

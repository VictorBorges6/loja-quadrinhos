import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ListaQuadrinhosComponent } from './components/lista-quadrinhos/lista-quadrinhos.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxMaskModule } from 'ngx-mask';
import { FinalizacaoCompraComponent } from './components/finalizacao-compra/finalizacao-compra.component';
import { DetalhesQuadrinhosComponent } from './components/detalhes-quadrinhos/detalhes-quadrinhos.component';

@NgModule({
  declarations: [
    AppComponent,
    ListaQuadrinhosComponent,
    FinalizacaoCompraComponent,
    DetalhesQuadrinhosComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    NgxMaskModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

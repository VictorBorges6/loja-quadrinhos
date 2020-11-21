import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Comic } from "../models/comics";
import { Md5 } from 'ts-md5/dist/md5';

@Injectable({
  providedIn: 'root'
})

/**
 * Classe responsável por controlar os serviços relacionados a API
 * e armazenar o quadrinho clicado pelo usuário para ver mais detalhes.
 */
export class ComicsService {

  private comicsUrl: string = 'https://gateway.marvel.com:443/v1/public/comics?';
  private publicKey: string = 'e5b5a887856bc2518f857eec3abb9331';
  private privateKey: string = '67d194c4aae6e9619c93d6146a2fafd211051bea';

  private comic = null;
  
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) {

  }

  getListaComics(titulo: string = ''): Observable<{data: {results: Comic[]}}> {
    let url = this.comicsUrl;
    if(titulo.length > 0) {
      url += 'titleStartsWith='+encodeURI(titulo)+'&';
    }
    return this.http.get<{data: {results: Comic[]}}>(url + this.getParams())
      .pipe(
        catchError(error => {
          console.log(error);

          return [];
        })
      );
  }

  getParams(): string {
    let ts = new Date().getTime();
    let hash = Md5.hashStr(ts + this.privateKey + this.publicKey);
    let params = 'ts=' + ts + '&apikey=' + this.publicKey + '&hash=' + hash;

    return params;
  }

  setComic(comic): void
  {
    this.comic = comic;
  }

  getComic()
  {
    return this.comic;
  }

}

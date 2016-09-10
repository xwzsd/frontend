import {Injectable} from 'angular2/core';
import {HTTP_PROVIDERS, Http, Request, Response} from 'angular2/http';
import {Observable} from 'rxjs/Observable';
import {Item} from '../models';

@Injectable()
export class ItemService {
  constructor(private _http: Http) {
  }

  fetchAll() {
    return this._http
      .get('/api/items')
      .map(r => r.json())
      .map(r => {
        let results: Array<Item> = [];
        if (r.results) {
          results = r.results.map((v: any) => new Item(v));
        }
        return { totalCount: r.totalCount, results: results };
      });
  }

  fetch(id: string) {
    return this._http
      .get('/api/item/alias/' + id)
      .map(r => r.json())
      .map(r => {
        return new Item(r);
      });
  }


  update(id: string, item: Item) {
    let param: { item: Item } = { 'item': item };
    return this._http
      .put('/api/item/alias/' + id, JSON.stringify(param));
  }
}

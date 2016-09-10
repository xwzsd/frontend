import {Injectable} from 'angular2/core';
import {HTTP_PROVIDERS, Http, Request, Response} from 'angular2/http';
import {Observable} from 'rxjs/Observable';
import {Category} from '../models';

@Injectable()
export class CategoryService {
  constructor(private _http: Http) {
  }

  fetchAll() {
    return this._http
      .get('/api/category-alias')
      .map(r => r.json())
      .map(r => {
        let results: Array<Category> = [];
        if (r.results) {
          results = r.results.map((v: any) => new Category(v));
        }
        return { totalCount: r.totalCount, results: results };
      });
  }

  fetch(id: string) {
    return this._http
      .get('/api/category-alias/page/' + id)
      .map(r => r.json())
      .map(r => {
        return new Category(r);
      });
  }


  update(id: string, category: Category) {
    let param: { category: Category } = { 'category': category };
    return this._http
      .put('/api/category-alias/page/' + id, JSON.stringify(param));
  }
}

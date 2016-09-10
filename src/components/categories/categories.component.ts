import {ViewEncapsulation, Component, OnInit} from 'angular2/core';
import {CORE_DIRECTIVES} from 'angular2/common';
import {CategoryService} from '../../services';
import {Category} from '../../models';

const templateUrl = require('./categories.html');

@Component({
  moduleId: module.id,
  templateUrl: templateUrl,
  directives: [
    CORE_DIRECTIVES
  ],
  providers: [
    CategoryService
  ]
})

export class CategoriesComponent implements OnInit {
  categories: Category[];
  totalCount: number = 0;

  constructor(private _categoryService: CategoryService) {
  }

  ngOnInit() {
    this.getCategories();
  }

  getCategories() {
    this._categoryService
      .fetchAll()
      .subscribe(d => {
        this.categories = d.results;
        this.totalCount = d.totalCount;
      });
  }
}

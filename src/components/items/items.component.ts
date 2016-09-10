import {ViewEncapsulation, Component, OnInit} from 'angular2/core';
import {CORE_DIRECTIVES} from 'angular2/common';
import {ItemService} from '../../services';
import {Item} from '../../models';

const templateUrl = require('./items.html');

@Component({
  moduleId: module.id,
  templateUrl: templateUrl,
  directives: [
    CORE_DIRECTIVES
  ],
  providers: [
    ItemService
  ]
})

export class ItemsComponent implements OnInit {
  items: Item[];
  totalCount: number = 0;

  constructor(private _itemService: ItemService) {
  }

  ngOnInit() {
    this.getItems();
  }

  getItems() {
    this._itemService
      .fetchAll()
      .subscribe(d => {
        this.items = d.results;
        this.totalCount = d.totalCount;
      });
  }
}

import {Component, OnInit} from 'angular2/core';
import {
FORM_DIRECTIVES,
CORE_DIRECTIVES,
FormBuilder,
ControlGroup,
Validators
} from 'angular2/common';
import {RouteParams, Router} from 'angular2/router';
import {ItemFormComponent} from '../../components';
import {ItemService} from '../../services';
import {Item} from '../../models';

const templateUrl = require('./item_detail.html');

@Component({
  moduleId: module.id,
  templateUrl: templateUrl,
  directives: [
    CORE_DIRECTIVES,
    FORM_DIRECTIVES,
    ItemFormComponent
  ],
  providers: [
    ItemService
  ]
})

export class ItemDetailComponent implements OnInit {
  id: string;
  form: ControlGroup;
  item: Item = new Item({});

  constructor(
    private _router: Router,
    private _routeParams: RouteParams,
    private _itemService: ItemService,
    fb: FormBuilder) {
    this.form = fb.group({
      'name': ['', Validators.required],
      'price': ['', Validators.required],
      'description': ['', Validators.required]
    });
  }

  ngOnInit(): void {
    this.id = this._routeParams.get('id');
    this._itemService
      .fetch(this.id)
      .subscribe(r => this.item = r);
  }

  onSubmit(): void {
    this._itemService
      .update(this.id, this.item)
      .subscribe(_ => {
        this._router.navigate(['Items']);
      });
  }
}

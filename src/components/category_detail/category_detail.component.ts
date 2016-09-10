import {Component, OnInit} from 'angular2/core';
import {
FORM_DIRECTIVES,
CORE_DIRECTIVES,
FormBuilder,
ControlGroup,
Validators
} from 'angular2/common';
import {RouteParams, Router} from 'angular2/router';
import {CategoryFormComponent} from '../../components';
import {CategoryService} from '../../services';
import {Category} from '../../models';

const templateUrl = require('./category_detail.html');

@Component({
  moduleId: module.id,
  templateUrl: templateUrl,
  directives: [
    CORE_DIRECTIVES,
    FORM_DIRECTIVES,
    CategoryFormComponent
  ],
  providers: [
    CategoryService
  ]
})

export class CategoryDetailComponent implements OnInit {
  id: string;
  form: ControlGroup;
  category: Category = new Category({});

  constructor(
    private _router: Router,
    private _routeParams: RouteParams,
    private _categoryService: CategoryService,
    fb: FormBuilder) {
    this.form = fb.group({
      'name': ['', Validators.required],
      'alias': ['', Validators.required]
    });
  }

  ngOnInit(): void {
    this.id = this._routeParams.get('id');
    this._categoryService
      .fetch(this.id)
      .subscribe(r => this.category = r);
  }

  onSubmit(): void {
    this._categoryService
      .update(this.id, this.category)
      .subscribe(_ => {
        this._router.navigate(['Categories']);
      });
  }
}

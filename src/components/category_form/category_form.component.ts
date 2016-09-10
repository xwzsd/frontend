import {Component} from 'angular2/core';
import {FORM_DIRECTIVES, CORE_DIRECTIVES, ControlGroup} from 'angular2/common';
import {Category} from '../../models';

const templateUrl = require('./category_form.html');

@Component({
  moduleId: module.id,
  selector: 'category-form',
  inputs: ['category', 'form'],
  templateUrl: templateUrl,
  directives: [
    FORM_DIRECTIVES,
    CORE_DIRECTIVES
  ]
})

export class CategoryFormComponent {
  category: Category;
  form: ControlGroup;
}

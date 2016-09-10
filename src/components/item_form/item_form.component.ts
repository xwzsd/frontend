import {Component} from 'angular2/core';
import {FORM_DIRECTIVES, CORE_DIRECTIVES, ControlGroup} from 'angular2/common';
import {Item} from '../../models';

const templateUrl = require('./item_form.html');

@Component({
  moduleId: module.id,
  selector: 'item-form',
  inputs: ['item', 'form'],
  templateUrl: templateUrl,
  directives: [
    FORM_DIRECTIVES,
    CORE_DIRECTIVES
  ]
})

export class ItemFormComponent {
  item: Item;
  form: ControlGroup;
}

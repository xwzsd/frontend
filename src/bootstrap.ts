/*
 * Providers provided by Angular
 */
 /// <reference path="../../typings/tsd.d.ts" />
 /// <reference path="../../typings/typings.d.ts" />
import 'es6-shim';
import 'es6-promise';
import 'rxjs/Rx';
import 'zone.js';
import 'reflect-metadata';
import {bootstrap} from 'angular2/platform/browser';
import {HTTP_PROVIDERS} from 'angular2/http';
import {FORM_PROVIDERS} from 'angular2/common';
import {provide, enableProdMode} from 'angular2/core';
import {
  ROUTER_PRIMARY_COMPONENT,
  APP_BASE_HREF,
  ROUTER_PROVIDERS as NG2_ROUTER_PROVIDERS,
  LocationStrategy,
  HashLocationStrategy
} from 'angular2/router';

// my app
import {App} from './app';

// compile when html template has updated
declare var process: {
   env: {
       NODE_ENV: string
   }
};
if (process.env.NODE_ENV === 'development') {
  require('./development');
}

const ROUTER_PROVIDERS: Array<any> = [
  NG2_ROUTER_PROVIDERS,
  provide(ROUTER_PRIMARY_COMPONENT, {
    useValue: App
  }),
  provide(LocationStrategy, {
    useClass: HashLocationStrategy
  }),
  provide(APP_BASE_HREF, {
    useValue: '/'
  })
];

// These are dependencies of our App
const APP_PROVIDERS: Array<any> = [
  HTTP_PROVIDERS,
  FORM_PROVIDERS,
  ROUTER_PROVIDERS
];


enableProdMode();
bootstrap(App, APP_PROVIDERS);

/// <reference path="../../typings/index.d.ts" />
// declare let __moduleName : string;

import { Component, ViewChild, Injector } from '@angular/core';
import { HTTP_PROVIDERS } from '@angular/http';


@Component({
  // moduleId: __moduleName,
  selector: 'my-app',
  styles: [`

  `],
  template:`
    <h1>Hello World!</h1>

  `,
  providers: [HTTP_PROVIDERS]
})
export class AppComponent {

}


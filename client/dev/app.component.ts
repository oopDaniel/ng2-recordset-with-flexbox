/// <reference path="../../typings/index.d.ts" />
// declare let __moduleName : string;

import { Component, ViewChild, Injector } from '@angular/core';
import { HTTP_PROVIDERS } from '@angular/http';

import { HttpService } from './http-service';
import { Template } from './app.component.html';
import { Observable } from 'rxjs/Observable';
import { IntervalObservable } from 'rxjs/observable/IntervalObservable';
import 'rxjs/add/operator/take';


@Component({
    // moduleId: __moduleName,
    selector: 'my-app',
    styles: [`
      div.container {
        display: flex;
        // flex-direction: column;
        // flex-wrap: wrap;
        // align-items: stretch;
        max-width: 1024px;
        width: 1024px;
        min-height: 300px;
        height: 300px;
        background: Salmon;
        // box-sizing: border-box;

        align-items: stretch;

      }
      div.item {
        border: 1px solid lightgrey;
        background: LightCyan;
        flex: 1;
        box-sizing: border-box;
        height: inherit;

      }
      div.item-half {
        height: 50%;
      }
      div.row {
        display: flex;
        align-items: center;
      }
      div.row div {
        flex: 1;
        height: 50%;
        text-align: center;
      }

    `],
    template: Template,
    providers: [HTTP_PROVIDERS, HttpService]
})
export class AppComponent {
    recordset: Observable<any>;
    header: Array<any> = [];
    testStr: Observable<string>;

    colLen: number = 0;
    private _colSpanKeeper: number = 0;

    // message$: Observable<string>;
    // private _ob = IntervalObservable.create(2000);
    // private messages = [
    //     'You are my hero!',
    //     'You are the best hero!',
    //     'Will you be my hero?'
    // ];

    constructor(private _data: HttpService) {
        _data.getData().subscribe( res => {
            this.recordset = res;
            this.header = res['header'];
            this.colLen = res['header']
                .filter( col => col.rowspan || col.colspan )
                .length;
        });

        this.testStr = _data.getString();
        // this.resend()
    }

    getWidth(col): string {
        if (col.colspan) { this._colSpanKeeper = col.colspan; }

        return col.rowspan > 1 || col.colspan > 1 ?
          `${100 / this.colLen}%`
          :
          `${100 / this.colLen / this._colSpanKeeper}%`;
    }

    // resend() {
    //     this.message$ = this._ob.take(10)
    //       .map(i => this.messages[i])
    //       .take(this.messages.length);
    // }


}


export const Template: string =
`



<!-- <div class="container" id="table">
    <div
      id="tr"
      class="item"
      *ngFor="let col of recordset?.header; let i = index"
      [ngClass]="{'item-half':!col.rowspan, 'row': !col.rowspan&&!col.colspan}"
      [style.width]="getWidth(col)"
      [style.order]="i"
    >
        {{col.name}}
    </div>
</div> -->


<div class="container" id="table">
    <div
      id="th"
      class="item"
      style="min-width:300px;"
      *ngFor="let col of header"
    >

        <div>{{col.name}}</div>

        <div
          *ngIf="col.children"
          class="row" style="height:50%">
            <div
              *ngFor="let child of col.children"
              class="item"
              [style.flex]="'0 1 '+100/col.colspan+'%'"
            >
              {{child.name}}
            </div>
        </div>


    </div>
<!--     <div
      id="th"
      class="item"
      style="height:50%"
      *ngFor="let col of header[0]"
      [ngClass]="{'item-half':col.colspan}"
      [style.flex]="'0 1 '+100/colLen+'%'"
    >

    </div> -->
</div>


<!-- <div class="container" id="table">
    <div *ngFor="let col of recordset?.header">
        <div class="row">
              <div class="cell" [ngClass]="{'span':col.colspan}">{{col.name}}</div>
              <div class="cell" *ngFor="let child of col.children">{{child?.name}}</div>

        </div>
    </div>
</div>
 -->









<!--     {{ recordset['header'] | async }}
 -->
<!-- <div>{{testStr | async}}</div> -->

<!--
<p>Message: {{ message$ | async }}</p>
 <button (click)="resend()">Resend</button>
 -->
`;

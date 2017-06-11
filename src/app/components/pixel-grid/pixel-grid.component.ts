import { Component, AfterViewInit, Input, ElementRef, ViewChild } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-pixel-grid',
  templateUrl: './pixel-grid.component.html',
  styleUrls: ['./pixel-grid.component.scss']
})
export class PixelGridComponent implements AfterViewInit {
  gridSettings;
  @Input() row: number;
  @Input() column: number;
  @Input() pixelSize: number;
  context:CanvasRenderingContext2D;

  @ViewChild('canvas') canvas:ElementRef;

  constructor(store: Store<any>) {
    this.gridSettings = store.select('gridSettings');

    this.gridSettings.subscribe((gridSettings)=>{
        console.log('action: ' + JSON.stringify(gridSettings));
    });

  }

  ngAfterViewInit() {

    let c = this.canvas.nativeElement;
    this.context = c.getContext('2d');
    this.pixelSize = 30;
    this.row = 10;
    this.column = 10;

    this.drawGrid();
  }

  drawGrid() {
    var ctx = this.context;
    ctx.fillStyle = "#123";
    ctx.fillRect(0, 0, 300, 150);

    for(var r = 0; r < this.column; r++) {
        for(var i = 0; i < this.row; i++) {
            ctx.strokeStyle = "#fff";
            ctx.strokeRect(r * this.pixelSize, i * this.pixelSize, this.pixelSize, this.pixelSize);
            ctx.fillStyle = '#262626';
            ctx.fillRect(r * this.pixelSize + 1, i * this.pixelSize + 1, this.pixelSize - 2, this.pixelSize - 2);
        }
    }
  }

}

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
  colors;
  pixelColor;
  backgroundColor;
  @Input() row: number;
  @Input() column: number;
  @Input() pixelSize: number;
  context:CanvasRenderingContext2D;

  @ViewChild('canvas') canvas:ElementRef;

  constructor(store: Store<any>) {
    this.gridSettings = store.select('gridSettings');
    this.colors = store.select('colors');
  }

  ngAfterViewInit() {
    let c = this.canvas.nativeElement;
    this.context = c.getContext('2d');

    this.gridSettings.subscribe((gridSettings)=>{
      this.pixelSize = gridSettings.pixelSize;
      this.row = gridSettings.row;
      this.column = gridSettings.column;
      c.width = gridSettings.pixelSize * gridSettings.row;
      c.height = gridSettings.pixelSize * gridSettings.column;
      this.drawGrid();
    });

    this.colors.subscribe((colors)=>{
      this.pixelColor = colors.pixelHex;
      this.backgroundColor = colors.backgroundHex;
      this.drawGrid();
    });
  }

  drawGrid() {
    var ctx = this.context;
    for(var r = 0; r < this.column; r++) {
        for(var i = 0; i < this.row; i++) {
            ctx.strokeStyle = this.backgroundColor;
            ctx.strokeRect(r * this.pixelSize, i * this.pixelSize, this.pixelSize, this.pixelSize);
            ctx.fillStyle = this.pixelColor;
            ctx.fillRect(r * this.pixelSize + 1, i * this.pixelSize + 1, this.pixelSize - 2, this.pixelSize - 2);
        }
    }
  }

}

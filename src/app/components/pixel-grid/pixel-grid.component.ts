import { Component, AfterViewInit, Input, ElementRef, ViewChild } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import { Store } from '@ngrx/store';

import { determineCoordinate } from './helpers/pixel-grid-helper';

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
  handleGridClick(e) {
    e = e || window.event;

    let xVal: number = determineCoordinate(event, 'x');
    let yVal: number = determineCoordinate(event, 'y');

    var imgData = this.context.getImageData(Math.floor(e.offsetX / this.pixelSize) * this.pixelSize + 1,
            Math.floor(e.offsetY / this.pixelSize) * this.pixelSize + 1,
            this.pixelSize - 2, this.pixelSize - 2);

    console.log('xVal: ' + xVal);
    console.log('yVal: ' + yVal);
    console.log(`imgData: ${imgData[0]}, ${imgData[1]}, ${imgData[2]}`);
  }

  drawGrid() {
    var ctx = this.context;
    for(var x = 0; x < this.column; x++) {
        for(var y = 0; y < this.row; y++) {
            ctx.strokeStyle = this.backgroundColor;
            ctx.strokeRect(x * this.pixelSize, y * this.pixelSize, this.pixelSize, this.pixelSize);
            ctx.fillStyle = this.pixelColor;
            ctx.fillRect(x * this.pixelSize + 1, y * this.pixelSize + 1, this.pixelSize - 2, this.pixelSize - 2);
        }
    }
  }

}

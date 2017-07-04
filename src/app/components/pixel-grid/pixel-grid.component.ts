import { Component, AfterViewInit, Input, ElementRef, ViewChild } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import { Store } from '@ngrx/store';

import { determineCoordinate, determinePixelRGB, drawPixelOnGrid, drawGrid
 } from './helpers/pixel-grid-helper';

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
      drawGrid(this.context, this.pixelSize, this.row, this.column,
        this.backgroundColor);
    });

    this.colors.subscribe((colors)=>{
      this.pixelColor = colors.pixelHex;
      this.backgroundColor = colors.backgroundHex;
    });
  }

  handleGridClick(event) {
    event = event || window.event;
    this.context.fillStyle = this.pixelColor;
    let xVal: number = determineCoordinate(event, 'X', this.pixelSize);
    let yVal: number = determineCoordinate(event, 'Y', this.pixelSize);
    var imgData = determinePixelRGB(this.context, event, this.pixelSize);

    drawPixelOnGrid(this.context, event, this.pixelSize);
  }

}

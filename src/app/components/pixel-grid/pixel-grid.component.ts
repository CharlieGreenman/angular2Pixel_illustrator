import { Component, AfterViewInit, Input, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-pixel-grid',
  templateUrl: './pixel-grid.component.html',
  styleUrls: ['./pixel-grid.component.scss']
})
export class PixelGridComponent implements AfterViewInit {
  @Input() row: number;
  @Input() column: number;
  @Input() pixelSize: number;
  context:CanvasRenderingContext2D;

  @ViewChild('canvas') canvas:ElementRef;

  constructor() { }

  ngAfterViewInit() {
    console.log('ngAfterViewInit called');

    let c = this.canvas.nativeElement;
    this.context = c.getContext('2d');

    var ctx = this.context;
    ctx.fillStyle = "#000";
    ctx.fillRect(0, 0, 300, 150);
  }

  // if(this.canvas.getContext) {
  //   console.log('canvas has context and such');
  // }


}

import { Component, OnInit, Input, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-pixel-grid',
  templateUrl: './pixel-grid.component.html',
  styleUrls: ['./pixel-grid.component.scss']
})
export class PixelGridComponent {
  @ViewChild('canvas') canvasRef:ElementRef;
  private canvas: any;
  @Input() row: number;
  @Input() column: number;
  @Input() pixelSize: number;

  constructor() { }

  ngOnInit() {

  }

  ngAfterViewInit() {
    console.log('current row size: ' + this.canvas);
    const c = this.canvas.getContext('2d');
    c.fillStyle = "#fefefe";
    console.log('ngAfterViewInit called');
  }

  // if(this.canvas.getContext) {
  //   console.log('canvas has context and such');
  // }


}

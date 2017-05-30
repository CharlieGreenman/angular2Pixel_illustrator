import { Component, OnInit, Input, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-pixel-grid',
  templateUrl: './pixel-grid.component.html',
  styleUrls: ['./pixel-grid.component.scss']
})
export class PixelGridComponent implements OnInit {
  @ViewChild('canvas') canvasRef:ElementRef;
  private canvas: any;
  @Input() data: number[];
  @Input() width: number;
  @Input() height: number;
  @Input() colors: string[];
  @Input() title: string;

  constructor() { }

  ngOnInit() {
  }

}

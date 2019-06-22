import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-drag',
  templateUrl: './drag.component.html',
  styleUrls: ['./drag.component.less']
})
export class DragComponent implements OnInit {

  items = [];
  active = -1;
  arr = [11, 12, 21, 22];

  get items1() {
    return this.items.filter((item, i) => !this.filt(i))
  }

  get items2() {
    return this.items.filter((item, i) => this.filt(i))
  }

  get cx() {
    return Math.min(...this.items2.map(i => i.x));
  }

  get cy() {
    return Math.min(...this.items2.map(i => i.y));
  }

  get cw() {
    return Math.max(...this.items2.map(i => i.x)) - this.cx + 32;
  }

  get ch() {
    return Math.max(...this.items2.map(i => i.y)) - this.cy + 32;
  }

  filt(i: number) {
    return i % 20 > 5 && i % 20 < 15 && i > 120 && i < 420
  }

  constructor() { }

  ngOnInit() {
    const h = 30;
    const v = 20;
    const len = 38;
    let c: number = 0;

    for (let i = 0; i < h; i++) {
      for (let j = 0; j < v; j++) {
        this.items.push({ x: i * len, y: j * len, c: c++ })
      }
    }

  }
}

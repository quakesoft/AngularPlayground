import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-links',
  templateUrl: './links.component.html',
  styleUrls: ['./links.component.less']
})
export class LinksComponent implements OnInit {

  links = [
    { link: "imgedit", text: "Jimp" },
    { link: "drag", text: "Drag" }
  ]

  constructor() { }

  ngOnInit() {
  }

}

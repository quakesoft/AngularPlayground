import { Component, OnInit } from '@angular/core';
import * as Jimp from 'jimp';

@Component({
  selector: 'app-imgedit',
  templateUrl: './imgedit.component.html',
  styleUrls: ['./imgedit.component.less']
})
export class ImgeditComponent implements OnInit {

  original = 'assets/image/apple.jpg';
  edited = null;

  constructor() { }

  process(err, src) {
    this.edited = src;
  }

  async ngOnInit() {
    const img = await Jimp.read(this.original);
    const edited = img.resize(256, 256).quality(60).greyscale();

    await edited.getBase64(Jimp.MIME_JPEG, this.process.bind(this));
  }
}

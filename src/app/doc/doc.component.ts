import { Component, OnInit } from '@angular/core';
import { fadeInOut } from 'src/shared/animation';

@Component({
  selector: 'app-doc',
  templateUrl: './doc.component.html',
  styleUrls: ['./doc.component.css'],
  animations: [fadeInOut],
})
export class DocComponent implements OnInit {
  copied = false;
  error = false;
  navigation = {
    previous: {
      name: 'Home',
      link: '/',
    },
  };
  constructor() {}

  ngOnInit() {}

  async copyToClipBoard(baseURL: HTMLSpanElement) {
    try {
      await navigator.clipboard.writeText(baseURL.innerText);
      this.copied = true;
      setTimeout(() => (this.copied = false), 3000);
    } catch (err) {
      this.copied = false;
      this.error = true;
      setTimeout(() => (this.error = true), 3000);
    }
  }
}

import { Component, OnInit } from '@angular/core';
import { fadeInOut, goingRight } from 'src/shared/animation';

@Component({
  selector: 'app-doc',
  templateUrl: './doc.component.html',
  styleUrls: ['./doc.component.css'],
  animations: [fadeInOut, goingRight],
})
export class DocComponent implements OnInit {
  getCopied = false;
  exampleCopied = false;
  getError = false;
  exampleError = false;
  navigation = {
    previous: {
      name: 'Home',
      link: '/',
    },
  };
  constructor() {}

  ngOnInit() {}

  async copyToClipBoard(baseURL: string) {
    try {
      await navigator.clipboard.writeText(baseURL);
      if (baseURL.slice(0, 5) === 'https') {
        this.getCopied = true;
      } else {
        this.exampleCopied = true;
      }
      setTimeout(() => {
        this.getCopied = false;
        this.exampleCopied = false;
      }, 3000);
    } catch (err) {
      if (baseURL.slice(0, 5) === 'https') {
        this.getError = true;
      } else {
        this.exampleError = true;
      }
      setTimeout(() => {
        this.getError = false;
        this.exampleError = false;
      }, 3000);
    }
  }
}

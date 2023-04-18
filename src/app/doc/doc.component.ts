import { Component, ElementRef, ViewChild } from '@angular/core';
import { fadeInOut, goingRight } from 'src/shared/animation';

@Component({
  selector: 'app-doc',
  templateUrl: './doc.component.html',
  styleUrls: ['./doc.component.css'],
  animations: [fadeInOut, goingRight],
})
export class DocComponent {
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
  @ViewChild('documentation') documentation!: ElementRef;

  constructor() {}

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

  toggleDarkMode() {
    this.documentation.nativeElement.classList.toggle('darkMode');
    this.documentation.nativeElement
      .querySelector('.get')
      .classList.toggle('darkMode');

    const tableTH =
      this.documentation.nativeElement.querySelectorAll('table th');
    tableTH.forEach((th: HTMLTableElement) => {
      th.classList.toggle('darkMode');
    });
    const bodyTable =
      this.documentation.nativeElement.querySelectorAll('tbody');
    bodyTable.forEach((element: HTMLBodyElement) => {
      element.querySelectorAll('tr').forEach((tr) => {
        tr.classList.toggle('darkMode');
      });
    });

    const tableTD =
      this.documentation.nativeElement.querySelectorAll('table td');
    tableTD.forEach((td: HTMLTableElement) => {
      td.classList.toggle('darkMode');
    });

    this.documentation.nativeElement
      .querySelector('.code-container')
      .classList.toggle('darkMode');
  }
}

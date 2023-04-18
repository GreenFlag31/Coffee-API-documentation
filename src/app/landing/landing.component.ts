import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css'],
})
export class LandingComponent implements OnInit {
  navigation = {
    next: {
      name: 'See documentation',
      link: './documentation',
    },
  };
  @ViewChild('landing') landing!: ElementRef;

  constructor() {}

  ngOnInit() {}

  toggleDarkMode() {
    this.landing.nativeElement.classList.toggle('darkMode');

    this.landing.nativeElement
      .querySelector('.action a')
      .classList.toggle('darkMode');

    this.landing.nativeElement
      .querySelector('.action-icons')
      .classList.toggle('darkMode');

    this.landing.nativeElement
      .querySelectorAll('.links a')
      .forEach((link: HTMLLinkElement) => {
        link.classList.toggle('darkMode');
      });
  }
}

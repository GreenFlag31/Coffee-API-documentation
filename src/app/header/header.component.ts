import { Component, OnInit } from '@angular/core';
import { debounceTime, filter, fromEvent, tap } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  backgroundOnScroll = false;
  scrollLimit = 200;
  constructor() {}

  ngOnInit() {
    fromEvent(window, 'scroll')
      .pipe(debounceTime(50))
      .subscribe(() => {
        if (window.scrollY > this.scrollLimit) {
          this.backgroundOnScroll = true;
        } else {
          this.backgroundOnScroll = false;
        }
      });
  }
}

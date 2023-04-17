import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription, debounceTime, fromEvent } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit, OnDestroy {
  scrollSubscription!: Subscription;
  backgroundOnScroll = false;
  scrollLimit = 200;

  ngOnInit() {
    this.scrollSubscription = fromEvent(window, 'scroll')
      .pipe(debounceTime(50))
      .subscribe(() => {
        if (window.scrollY > this.scrollLimit) {
          this.backgroundOnScroll = true;
        } else {
          this.backgroundOnScroll = false;
        }
      });
  }

  ngOnDestroy() {
    this.scrollSubscription.unsubscribe();
  }
}

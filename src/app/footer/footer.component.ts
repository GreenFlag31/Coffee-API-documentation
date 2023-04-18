import { AfterViewInit, Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
})
export class FooterComponent implements AfterViewInit {
  darkMode = false;
  @Output() toggleDM = new EventEmitter();
  constructor() {}

  ngAfterViewInit() {
    if (localStorage.getItem('darkMode') === 'true') {
      this.toggleDarkMode();
    }
  }

  toggleDarkMode() {
    this.darkMode = !this.darkMode;
    localStorage.setItem('darkMode', this.darkMode.toString());
    this.toggleDM.emit();
  }
}

import {
  AfterViewInit,
  Component,
  ElementRef,
  EventEmitter,
  Output,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
})
export class FooterComponent implements AfterViewInit {
  darkMode = false;
  @Output() toggleDM = new EventEmitter();
  @ViewChild('checkbox') checkbox!: ElementRef;
  constructor() {}

  ngAfterViewInit() {
    if (localStorage.getItem('darkMode') === 'true') {
      this.toggleDarkMode();
      this.checkbox.nativeElement.checked = true;
    }
  }

  toggleDarkMode() {
    this.darkMode = !this.darkMode;
    localStorage.setItem('darkMode', this.darkMode.toString());
    this.toggleDM.emit();
  }
}

import { Component, Input, OnInit } from '@angular/core';
import { navigation } from 'src/shared/data-type';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css'],
})
export class NavigationComponent implements OnInit {
  @Input() navigation!: navigation;
  constructor() {}

  ngOnInit(): void {}
}

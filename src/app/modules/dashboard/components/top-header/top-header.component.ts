import { Component } from '@angular/core';

@Component({
  selector: 'app-top-header',
  templateUrl: './top-header.component.html',
  styleUrls: ['./top-header.component.scss']
})
export class TopHeaderComponent {
  isDesktop: boolean = true;
  isTablet: boolean = false;
  isPhone: boolean = false;

  switchToDesktop() {
    this.isDesktop = true;
    this.isTablet = false;
    this.isPhone = false;
  }

  switchToTablet() {
    this.isDesktop = false;
    this.isTablet = true;
    this.isPhone = false;
  }

  switchToPhone() {
    this.isDesktop = false;
    this.isTablet = false;
    this.isPhone = true;
  }

}

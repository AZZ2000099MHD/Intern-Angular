import {Component, ElementRef, Renderer2} from '@angular/core';
import {AboutComponent} from "../about/about.component";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  onMouseOver() {
    this.renderer.addClass(this.el.nativeElement, 'hovered');
  }

  onMouseOut() {
    this.renderer.removeClass(this.el.nativeElement, 'hovered');
  }

    protected readonly AboutComponent = AboutComponent;
}

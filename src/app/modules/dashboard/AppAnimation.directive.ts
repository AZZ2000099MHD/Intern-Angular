import {Directive, ElementRef, HostListener, Renderer2} from '@angular/core';

@Directive({
    selector: '[appAnimation]'
})
export class AppAnimationDirective {

    constructor(private el: ElementRef, private renderer: Renderer2) {}

    @HostListener('window:scroll', [])
    onWindowScroll() {
        const rect = this.el.nativeElement.getBoundingClientRect();
        const viewportHeight = window.innerHeight || document.documentElement.clientHeight;

        if (rect.top >= 0 && rect.top <= viewportHeight) {
            this.renderer.addClass(this.el.nativeElement, 'animate__animated');
            this.renderer.addClass(this.el.nativeElement, 'animate__fadeInUp');
        }
    }

}

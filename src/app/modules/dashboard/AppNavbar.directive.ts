import {AfterViewInit, Directive, ElementRef, HostListener, Input, Renderer2} from '@angular/core';

@Directive({
    selector: '[appNavbar]'
})
export class AppNavbarDirective implements AfterViewInit{

    ngAfterViewInit() {}

    @Input() scrollPosition: number = 200;

    constructor(private el: ElementRef, private renderer: Renderer2) {}
    @HostListener('window:scroll', ['$event'])
    onWindowScroll(event: Event) {
        const scrollY = window.scrollY;
        console.log('Scroll event detected');

        if (scrollY > this.scrollPosition) {
            this.renderer.setStyle(this.el.nativeElement, 'color', 'black');
            const activeLinks = this.el.nativeElement.querySelectorAll('.active-link');
            activeLinks.forEach((link: any) => {
                this.renderer.setStyle(link, 'color', '#D1002c');
            });

        } else {
            this.renderer.setStyle(this.el.nativeElement, 'background:','transparent');
        }
    }


}

import {Component, OnInit} from '@angular/core';
import {Title} from "@angular/platform-browser";
import {OwlOptions} from "ngx-owl-carousel-o";

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit{

  constructor(private title:Title) {
  }




  //Carousel Banner
  bannerSlidesStore: any[] = [
    {

      imageLink: 'https://preview.colorlib.com/theme/avo/images/bg_2.jpg.webp',
    }


  ];

  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    navSpeed: 700,
    dots: true,
    autoplay: true,
    autoplayTimeout: 5000,
    animateOut: 'fadeOut',
    animateIn: 'fadeIn',

    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 1
      },
      740: {
        items: 1
      },
      940: {
        items: 1
      }
    },
    nav: false
  };


  ngOnInit(): void {

    this.title.setTitle("Dashboard | Home")
    this.countUp(0, 400,20);
    this.countUp(1, 21,400);

  }

  countUp(index: number, finishCount: number,timeOut:number): void {
    let currentCount = 0;
    const intervalId = setInterval(() => {
      currentCount++;
      this.bannerSlidesStore[index].countProject = currentCount;
      if (currentCount >= finishCount) {
        clearInterval(intervalId);
      }
    }, timeOut);
  }


}

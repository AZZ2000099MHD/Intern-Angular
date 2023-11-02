import {Component, OnInit} from '@angular/core';
import {OwlOptions} from "ngx-owl-carousel-o";
import {Title} from "@angular/platform-browser";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{
  constructor(private title:Title) {
  }

  blogInsertDate:any = 'June 10, 2020';


  //Carousel Banner
  bannerSlidesStore: any[] = [
    {

      imageLink: 'https://preview.colorlib.com/theme/avo/images/bg_1.jpg.webp',
      titleText: 'we create modern & minimal website',
      subTitleText: 'A small river named Duden flows by their place and supplies it with the necessary regelialia.',
      buttonText: 'start project',
      countProject: 0,
      bottomText: 'more than a hundred successful projects'
    },
    {
      imageLink: 'https://preview.colorlib.com/theme/avo/images/bg_2.jpg.webp',
      titleText: 'we create modern & minimal website',
      subTitleText: 'A small river named Duden flows by their place and supplies it with the necessary regelialia.',
      buttonText: 'explore projects',
      countProject: 0,
      bottomText: 'years of experienced'
    },
  ];


  //=========About Section============

  aboutSectionItems: any[] = [
    {icon: 'assets/images/about-images/graphic-design.png', alt: '', serviceName: 'ui/ux design'},
    {icon: 'assets/images/about-images/web-programming.png', alt: '', serviceName: 'web development'},
    {icon: 'assets/images/about-images/layers.png', alt: '', serviceName: 'product design'},
    {icon: 'assets/images/about-images/coding.png', alt: '', serviceName: 'mobile apps'},
    {icon: 'assets/images/about-images/zoom.png', alt: '', serviceName: 'seo'},
  ];

  testimonials: any[] = [
    {
      description: 'far far away behind the world mountains, far from the countries Vokalia and Constantia, there live the blind texts.',
      image: 'https://preview.colorlib.com/theme/avo/images/person_2.jpg.webp',
      name: 'roger scott',
      position: 'marketing manager'
    },
    {
      description: 'far far away behind the world mountains, far from the countries Vokalia and Constantia, there live the blind texts.',
      image: 'https://preview.colorlib.com/theme/avo/images/person_1.jpg.webp',
      name: 'roger scott',
      position: 'marketing manager'
    },
    {
      description: 'far far away behind the world mountains, far from the countries Vokalia and Constantia, there live the blind texts.',
      image: 'https://preview.colorlib.com/theme/avo/images/person_2.jpg.webp',
      name: 'roger scott',
      position: 'marketing manager'
    },
    {
      description: 'far far away behind the world mountains, far from the countries Vokalia and Constantia, there live the blind texts.',
      image: 'https://preview.colorlib.com/theme/avo/images/person_2.jpg.webp',
      name: 'roger scott',
      position: 'marketing manager'
    },
    {
      description: 'far far away behind the world mountains, far from the countries Vokalia and Constantia, there live the blind texts.',
      image: 'https://preview.colorlib.com/theme/avo/images/person_2.jpg.webp',
      name: 'roger scott',
      position: 'marketing manager'
    },
    {
      description: 'far far away behind the world mountains, far from the countries Vokalia and Constantia, there live the blind texts.',
      image: 'https://preview.colorlib.com/theme/avo/images/person_1.jpg.webp',
      name: 'roger scott',
      position: 'marketing manager'
    },
  ];

  blogs: any[] = [
    {header:'amplify your blockchain team',imageLink:'https://preview.colorlib.com/theme/avo/images/image_1.jpg.webp',date:this.blogInsertDate,user:'admin',comments:'3',subText:'far far away behind the world mountains, far from the countries Vokalia and Constantia, there live the blind texts.'},
    {header:'amplify your blockchain team',imageLink:'https://preview.colorlib.com/theme/avo/images/image_2.jpg.webp',date:this.blogInsertDate,user:'admin',comments:'3',subText:'far far away behind the world mountains, far from the countries Vokalia and Constantia, there live the blind texts.'},
    {header:'amplify your blockchain team',imageLink:'https://preview.colorlib.com/theme/avo/images/image_3.jpg.webp',date:this.blogInsertDate,user:'admin',comments:'3',subText:'far far away behind the world mountains, far from the countries Vokalia and Constantia, there live the blind texts.'},
    {header:'amplify your blockchain team',imageLink:'https://preview.colorlib.com/theme/avo/images/image_4.jpg.webp',date:this.blogInsertDate,user:'admin',comments:'3',subText:'far far away behind the world mountains, far from the countries Vokalia and Constantia, there live the blind texts.'}
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

  testimonialOption: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    navSpeed: 700,
    dots: true,
    autoplay: true,
    autoplayTimeout: 2000,
    margin: 25,
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 1
      },
      590:{
        items:3
      },
      740: {
        items: 3
      },
      940: {
        items: 3
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

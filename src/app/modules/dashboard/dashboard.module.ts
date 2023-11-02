import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './components/header/header.component';

import {CarouselModule} from "ngx-owl-carousel-o";
import { TopHeaderComponent } from './components/top-header/top-header.component';
import { AboutComponent } from './components/about/about.component';
import { WorkComponent } from './components/work/work.component';
import { BlogComponent } from './components/blog/blog.component';
import { ContactComponent } from './components/contact/contact.component';
import {AppAnimationDirective} from "./AppAnimation.directive";
import {AppHeaderDirective} from "./AppHeader.directive";
import {AppNavbarDirective} from "./AppNavbar.directive";



@NgModule({
  declarations: [
    DashboardComponent,
    HomeComponent,
    AppNavbarDirective,
    HeaderComponent,
    TopHeaderComponent,
    AboutComponent,
    WorkComponent,
    BlogComponent,
    ContactComponent,
    AppAnimationDirective,
    AppHeaderDirective

  ],
  exports: [
    TopHeaderComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    CarouselModule

  ]
})
export class DashboardModule {

}

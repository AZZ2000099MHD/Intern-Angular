import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import {HomeComponent} from "./components/home/home.component";
import {AppComponent} from "../../app.component";
import {AboutComponent} from "./components/about/about.component";
import {WorkComponent} from "./components/work/work.component";
import {BlogComponent} from "./components/blog/blog.component";
import {ContactComponent} from "./components/contact/contact.component";


const routes: Routes = [
  {
    path: '', component: DashboardComponent, children: [
      {path: '', redirectTo: 'home', pathMatch: 'full'},
      {path: 'home', component: HomeComponent},
      {path: 'about', component: AboutComponent},
      {path: 'work', component: WorkComponent},
      {path: 'blog', component: BlogComponent},
      {path: 'contact', component: ContactComponent}
    ]
  }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }

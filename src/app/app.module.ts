import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { MainComponent } from './main/main.component';
import { MenuComponent } from './menu/menu.component';

import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './header/header.component';

import { ChartModule } from 'angular-highcharts';
import { ChartComponent } from './chart/chart.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent }
];


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MainComponent,
    MenuComponent,
    HeaderComponent,
    ChartComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ChartModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

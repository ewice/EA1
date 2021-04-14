import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { GalleryComponent } from './gallery/gallery.component';
import { HomeComponent } from './home/home.component';
import { BarChartComponent } from './gallery/components/bar-chart/bar-chart.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ChartsModule } from 'ng2-charts';

@NgModule({
  declarations: [
    AppComponent,
    GalleryComponent,
    HomeComponent,
    BarChartComponent,
  ],
  imports: [BrowserModule, NgbModule, ChartsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

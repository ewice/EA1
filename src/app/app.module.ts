import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { UploadComponent } from './upload/upload.component';
import { HomeComponent } from './home/home.component';
import { BarChartComponent } from './upload/components/bar-chart/bar-chart.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ChartsModule } from 'ng2-charts';
import { DocumentationComponent } from './documentation/documentation.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@NgModule({
  declarations: [
    AppComponent,
    UploadComponent,
    HomeComponent,
    BarChartComponent,
    DocumentationComponent,
  ],
  imports: [
    BrowserModule,
    NgbModule,
    ChartsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatProgressSpinnerModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

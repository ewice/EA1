import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { UploadComponent } from './upload/upload.component';
import { HomeComponent } from './home/home.component';
import { BarChartComponent } from './upload/components/bar-chart/bar-chart.component';
import { DocumentationComponent } from './documentation/documentation.component';
import { DragDropDirective } from '../shared/directives/drag-drop.directive';
import { AppRoutingModule } from './app-routing.module';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ChartsModule } from 'ng2-charts';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    UploadComponent,
    HomeComponent,
    BarChartComponent,
    DocumentationComponent,
    DragDropDirective,
  ],
  imports: [
    BrowserModule,
    NgbModule,
    ChartsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

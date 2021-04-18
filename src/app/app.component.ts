import { Component } from '@angular/core';
import { ClassificationService } from '../shared/services/classification.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'EA1';

  constructor(private classificationService: ClassificationService) {}
}

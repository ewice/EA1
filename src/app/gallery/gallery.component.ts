import { Component } from '@angular/core';
import { ClassificationService } from '../../shared/services/classification.service';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss'],
})
export class GalleryComponent {
  files: string[] = [
    'assets/images/bird.png',
    'assets/images/fuchs.jpg',
    'assets/images/panda.jpg',
    'assets/images/eichhoernchen.jpg',
  ];
  activeImage: string;
  labels: string[] = [];
  confidences: number[] = [];

  constructor(private classificationService: ClassificationService) {}

  uploadFile(event): void {
    const file = (event.target as HTMLInputElement).files[0];
    const reader = new FileReader();
    reader.onload = () => {
      this.files.push(reader.result as string);
    };
    reader.readAsDataURL(file);
  }

  onGetClassificationClicked(event): void {
    this.activeImage = event.target.src;
    this.labels = [];
    this.confidences = [];
    this.classificationService
      .getClassification(event.target)
      .then((result) => {
        this.labels = [];
        this.confidences = [];
        for (const classification of result) {
          this.labels.push(classification.label.split(',')[0]);
          this.confidences.push(
            Math.round(classification.confidence * 10000) / 100
          );
        }
      });
  }
}

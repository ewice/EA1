import { Component, ElementRef, ViewChild } from '@angular/core';
import { ClassificationService } from '../../shared/services/classification.service';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.scss'],
})
export class UploadComponent {
  @ViewChild('images') images: ElementRef<HTMLElement>;

  files: string[] = [
    'assets/images/bird.png',
    'assets/images/fuchs.jpg',
    'assets/images/panda.jpg',
    'assets/images/loewe.jpg',
    'assets/images/pinguin.jpg',
    'assets/images/orka.jpg',
  ];
  activeImage: string;
  selectedImageIndex: number;
  labels: string[] = [];
  confidences: number[] = [];

  constructor(private classificationService: ClassificationService) {}

  onFileDropped(file): void {
    this.prepareFile(file);
  }

  fileBrowseHandler(event): void {
    this.prepareFile((event.target as HTMLInputElement).files[0]);
  }

  prepareFile(file): void {
    const reader = new FileReader();
    reader.onload = () => {
      this.files.unshift(reader.result as string);
      this.selectedImageIndex += 1;
    };
    reader.readAsDataURL(file);
  }

  onGetClassificationClicked(event, index: number): void {
    this.labels = [];
    this.confidences = [];
    this.activeImage = event.target.src;
    this.selectedImageIndex = index;
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

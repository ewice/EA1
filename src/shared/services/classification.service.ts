import { Injectable } from '@angular/core';
import * as ml5 from 'ml5';

@Injectable({
  providedIn: 'root',
})
export class ClassificationService {
  classifier;

  constructor() {
    this.classifier = ml5.imageClassifier('MobileNet');
  }

  getClassification(image: EventTarget): Promise<any> {
    return this.classifier.then((classifier) => classifier.classify(image));
  }
}

import { Injectable } from '@angular/core';
import * as ml5 from 'ml5';

@Injectable({
  providedIn: 'root',
})
export class ClassificationService {
  constructor() {}

  getClassification(image: EventTarget): Promise<any> {
    return ml5
      .imageClassifier('MobileNet')
      .then((classifier) => classifier.classify(image));
  }
}

import { Injectable } from '@angular/core';
import { BMI } from '../../models/bmi.model';

@Injectable()
export class BmiProvider {

    calculateBMI(height: number, weight: number) {
      const BMI = weight / height / height;
      return <BMI>{
        BMI: BMI.toFixed(2),
        classification: this.classifyBMI(BMI),
      };
    }

    classifyBMI(BMI: number) {
      if (BMI < 18.5 ) {
          return `Underweight`;
      } else if (BMI > 18.5 && BMI < 24.9) {
            return `Normal Weight`;
      } else if (BMI > 25) {
        return `Overweight`;
      }
    }
  }
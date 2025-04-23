import { DecimalPipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-convert',
  imports: [FormsModule, DecimalPipe],
  templateUrl: './convert.component.html',
  styleUrl: './convert.component.scss'
})
export class ConvertComponent {
meters:number=0;
feet:number=0;
feetAnswer:number=0;
metersAnswer:number=0;

celcius:number=0;
farenheit:number=0;
farenheitAnswer:number=0;
celciusAnswer:number=0;

convertToFeet():void {
  this.feetAnswer=this.meters*3.28;
}

convertToMeters():void {
  this.metersAnswer=this.feet/3.28;
}

convertToFarenheit():void {
  this.farenheitAnswer=this.celcius* (9/5) + 32
}

convertToCelcius(): void {
  this.celciusAnswer=(this.farenheit-32)*5/9
}
}

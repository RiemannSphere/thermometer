import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThermometerComponent } from './components/thermometer/thermometer.component';
import { ToMarginPipe } from './pipes/to-margin.pipe';
import { ToAnglePipe } from './pipes/to-angle.pipe';

@NgModule({
	declarations: [
		ThermometerComponent,
		ToMarginPipe,
  ToAnglePipe
	],
	imports: [
		CommonModule
	],
	exports: [
		ThermometerComponent
	]
})
export class ThermometerModule { }

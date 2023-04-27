import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-thermometer',
  templateUrl: './thermometer.component.html',
  styleUrls: ['./thermometer.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ThermometerComponent {
    @Input() minTemp!: number;
    @Input() maxTemp!: number;
    @Input() temp!: number;
}

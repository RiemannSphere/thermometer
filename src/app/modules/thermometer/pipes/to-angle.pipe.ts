import { Pipe, PipeTransform } from '@angular/core';

const PHI_MIN = 5 * Math.PI / 4;
const DELTA_PHI = 6 * Math.PI / 4;

@Pipe({
    name: 'toAngle'
})
export class ToAnglePipe implements PipeTransform {

    transform(temps: [number, number, number], unit: 'rad' | 'deg' = 'rad'): number {
        const [T_min, T_max, T] = temps;
        const angleRad = (PHI_MIN - DELTA_PHI * (T - T_min) / (T_max - T_min)) % (2 * Math.PI);

        switch (unit) {
            case 'rad':
                return angleRad;
            case 'deg':
                return angleRad * 180 / Math.PI
            default:
                throw Error(`The unit ${unit} is not supported.`);
        }
    }

}

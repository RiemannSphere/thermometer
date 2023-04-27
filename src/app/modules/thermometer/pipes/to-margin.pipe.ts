import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'toMargin'
})
export class ToMarginPipe implements PipeTransform {
    transform(angle: number, position: "top" | "left", radius: number): string {
        switch (position) {
            case 'left':
                return this.calculateLeftMargin(angle, radius) + "px";
            case 'top':
                return this.calculateTopMargin(angle, radius) + "px";
            default:
                throw Error(`Position ${position} is not supported.`);
        }
    }

    private calculateLeftMargin(angle: number, radius: number): number {
        const x = radius * Math.cos(angle);

        return radius + x;
    }

    private calculateTopMargin(angle: number, radius: number): number {
        const y = radius * Math.sin(angle);

        return radius - y;
    }
}

import {Option} from "./option";
import {NumberType} from "types/optionType";

type RotateValueType = NumberType;

export class Rotate extends Option {
    angle: RotateValueType;
    constructor(angle: RotateValueType) {
        super();

        if (angle < 0 || angle % 90 !== 0){
            throw new Error(`Invalid angle: ${angle}`);
        }

        this.angle = angle;
    }

    name(): string {
        return 'rot';
    }

    data(): Array<RotateValueType> {
        return [
            this.angle
        ];
    }
}

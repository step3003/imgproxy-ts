import {Option} from "./option";
import {NumberType} from "types/optionType";

export type WidthValueType = NumberType;
export class Width extends Option {
    width: WidthValueType;
    constructor(width: WidthValueType) {
        super();

        if (width < 0){
            throw new Error(`Invalid width: ${width}`);
        }

        this.width = width;
    }

    name(): string {
        return 'w';
    }

    data(): Array<WidthValueType> {
        return [
            this.width
        ];
    }
}

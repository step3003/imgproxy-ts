import {Option} from "./option";
import {NumberType} from "types/optionType";

export type MinWidthValueType = NumberType;

export class MinWidth extends Option {
    minWidth: MinWidthValueType;
    constructor(minWidth: MinWidthValueType) {
        super();

        if (minWidth < 0){
            throw new Error(`Invalid min width: ${minWidth}`);
        }

        this.minWidth = minWidth;
    }

    name(): string {
        return 'mw';
    }

    data(): Array<MinWidthValueType> {
        return [
            this.minWidth
        ];
    }
}

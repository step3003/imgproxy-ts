import {Option} from "./option";
import {NumberType} from "types/optionType";

export type MinHeightValueType = NumberType;

export class MinHeight extends Option {
    minHeight: MinHeightValueType;
    constructor(minHeight: MinHeightValueType) {
        super();

        if (minHeight < 0){
            throw new Error(`Invalid min height: ${minHeight}`);
        }

        this.minHeight = minHeight;
    }

    name(): string {
        return 'mh';
    }

    data(): Array<MinHeightValueType> {
        return [
            this.minHeight
        ];
    }
}

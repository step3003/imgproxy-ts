import {Option} from "./option";
import {NumberType} from "types/optionType";

export type HeightValueType = NumberType;

export class Height extends Option {
    height: HeightValueType;

    constructor(height: HeightValueType) {
        super();
        if (height < 0){
            throw new Error(`Invalid height: ${height}`);
        }

        this.height = height;
    }

    name(): string {
        return 'h';
    }

    data(): Array<HeightValueType> {
        return [
            this.height
        ];
    }
}

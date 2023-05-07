import {Option} from "./option";
import {BooleanType} from "types/optionType";

export  type AutoRotateValueType = BooleanType;

export class AutoRotate extends Option {
    rotate: AutoRotateValueType;
    constructor(rotate: AutoRotateValueType) {
        super();
        this.rotate = rotate;
    }

    name(): string {
        return 'ar';
    }

    data(): Array<AutoRotateValueType> {
        return [
            this.rotate
        ];
    }
}

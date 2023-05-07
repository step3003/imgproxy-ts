import {Option} from "./option";
import {NumberType} from "types/optionType";

export type SharpenValueType = NumberType;

export class Sharpen extends Option {
    sigma: SharpenValueType;
    constructor(sigma: SharpenValueType) {
        super();

        if (sigma < 0){
            throw new Error(`Invalid sharpen: ${sigma}`);
        }

        this.sigma = sigma;
    }
    name(): string {
        return 'sh';
    }

    data(): Array<SharpenValueType> {
        return [
            this.sigma
        ];
    }
}

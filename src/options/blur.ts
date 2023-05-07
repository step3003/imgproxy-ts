import {Option} from "./option";
import {NumberType} from "types/optionType";

export type BluValueType = NumberType;

export class Blur extends Option {
    sigma: BluValueType;
    constructor(sigma: BluValueType) {
        super();

        if (sigma < 0){
            throw new Error(`Invalid blur: ${sigma}`);
        }

        this.sigma = sigma;
    }

    name(): string {
        return 'bl';
    }

    data(): Array<BluValueType> {
        return [
            this.sigma
        ];
    }
}

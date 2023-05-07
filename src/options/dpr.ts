import {Option} from "./option";
import {NumberType} from "types/optionType";

export type DprValueType = NumberType;

export class Dpr extends Option {
    dpr: DprValueType;
    constructor(dpr: DprValueType) {
        super();
        if (dpr <= 0){
            throw new Error(`Invalid drp: ${dpr}`);
        }

        this.dpr = dpr;
    }

    name(): string {
        return 'dpr';
    }

    data(): Array<DprValueType> {
        return [
            this.dpr
        ];
    }
}

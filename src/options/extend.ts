import {Option} from "./option";
import {GravityValueType} from "options/gravity";


export type ExtendOptionType = 1 | "t" | true;
export type ExtendGravityValueType = GravityValueType | null;
export class Extend extends Option {
    extend: ExtendOptionType;
    gravity: ExtendGravityValueType;

    constructor(extend: ExtendOptionType, gravity: ExtendGravityValueType = null) {
        super();

        this.extend = extend;
        this.gravity = gravity;
    }

    name(): string {
        return 'ex';
    }

    data(): Array<ExtendOptionType> {
        return [
            this.extend
        ];
    }
}

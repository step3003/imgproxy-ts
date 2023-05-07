import {Option} from "./option";

export type EnlargeValueType = 1 | "t" | true;

export class Enlarge extends Option {
    enlarge: EnlargeValueType;

    constructor(enlarge: EnlargeValueType) {
        super();

        this.enlarge = enlarge;
    }

    name(): string {
        return 'el';
    }

    data(): Array<EnlargeValueType> {
        return [
            this.enlarge
        ];
    }
}

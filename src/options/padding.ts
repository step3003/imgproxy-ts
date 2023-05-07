import {Option} from "./option";
import {NumberType} from "types/optionType";

export type PaddingNumberType = NumberType | null;

export class Padding extends Option {
    top: PaddingNumberType | null;
    right: PaddingNumberType | null;
    bottom: PaddingNumberType | null;
    left: PaddingNumberType | null;

    constructor(
        top: PaddingNumberType = null,
        right: PaddingNumberType = null,
        bottom: PaddingNumberType = null,
        left: PaddingNumberType = null,
    ) {
        super();

        this.top = top;
        this.right = right;
        this.bottom = bottom;
        this.left = left;
    }

    name(): string {
        return 'pd';
    }

    data(): Array<PaddingNumberType> {
        return [
            this.top,
            this.right,
            this.bottom,
            this.left
        ];
    }
}

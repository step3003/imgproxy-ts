import {Option} from "./option";

export type ResizeTypeValueType = 'fit' | 'fill' | 'fill-down' | 'force' | 'auto';

export class ResizeType extends Option {
    resizeType: ResizeTypeValueType;
    constructor(resizeType: ResizeTypeValueType) {
        super();

        this.resizeType = resizeType;
    }

    name(): string {
        return 'rt';
    }

    data(): Array<ResizeTypeValueType> {
        return [
            this.resizeType
        ];
    }
}

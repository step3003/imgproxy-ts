import {Option} from "./option";
import {NumberType} from "types/optionType";

export type QualityValueType = NumberType;
export class Quality extends Option {
    quality: QualityValueType;
    constructor(quality: QualityValueType) {
        super();
        if (quality < 0 || quality > 100){
            throw new Error(`Invalid quality: ${quality}`);
        }

        this.quality = quality;
    }
    name(): string {
        return 'q';
    }

    data(): Array<QualityValueType> {
        return [
            this.quality
        ];
    }
}

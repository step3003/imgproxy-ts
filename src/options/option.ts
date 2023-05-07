import {NumberType, OptionDataType} from "types/optionType";

export abstract class Option {
    abstract name(): string;
    abstract data(): OptionDataType;

    value(): string {
        let data = this.data() as Array<string>;

        data.unshift(this.name())

        return data.join(":").replace(/:$/, "");
    }

    toString(): string {
        return this.value();
    }
}

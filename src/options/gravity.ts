import {Option} from "./option";
import {NumberType} from "types/optionType";

export enum GravityValueType {
    NORTH = 'no',
    SOUTH = 'so',
    EAST = 'ea',
    WEST = 'we',
    NORTH_EAST = 'noea',
    NORTH_WEST = 'nowe',
    SOUTH_EAST = 'soea',
    SOUTH_WEST = 'sowe',
    CENTER = 'ce',
    SMART = 'sm',
    FOCUS_POINT = 'fp'
}

export type GravityAxisOption = NumberType | null;

export class Gravity extends Option {
    x: GravityAxisOption;
    y: GravityAxisOption;
    type: GravityValueType;

    constructor(type: GravityValueType, x: GravityAxisOption = null, y: GravityAxisOption = null) {
        super();

        if (x !== null && (x < 0 || x > 1)) {
            throw new Error(`Invalid gravity X: ${x}`);
        }

        if (y !== null && (y < 0 || y > 1)) {
            throw new Error(`Invalid gravity Y: ${y}`);
        }

        this.x = x;
        this.y = y;
        this.type  = type;
    }

    name(): string {
        return 'g';
    }

    data(): Array<GravityValueType | GravityAxisOption> {
        return [
            this.type,
            this.x,
            this.y,
        ];
    }
}

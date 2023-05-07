import {Option} from "./option";
import {NumberType} from "types/optionType";

export enum WatermarkPositionType {
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
    FOCUS_POINT = 'fp',
    REPEAT = 're',
}

type WatermarkOpacityType = NumberType;
type WatermarkXType = NumberType;
type WatermarkYType = NumberType;
type WatermarkScaleType = NumberType;

export type WatermarkValueType = WatermarkOpacityType |
    WatermarkXType |
    WatermarkYType |
    WatermarkPositionType |
    WatermarkScaleType;

export class Watermark extends Option {
    opacity: WatermarkOpacityType;
    position: WatermarkPositionType;
    x: WatermarkXType;
    y: WatermarkYType;
    scale: WatermarkScaleType;

    constructor(
        opacity: WatermarkOpacityType,
        position: WatermarkPositionType,
        x: WatermarkXType,
        y: WatermarkYType,
        scale: WatermarkScaleType
    ) {
        super();

        if (opacity < 0 || opacity > 1) {
            throw new Error(`Invalid watermark opacity: ${opacity}`);
        }

        if (scale < 0) {
            throw new Error(`Invalid watermark scale: ${scale}`);
        }

        this.opacity = opacity;
        this.position = position;
        this.x = x;
        this.y = y;
        this.scale = scale;
    }

    name(): string {
        return 'wm';
    }

    data(): Array<WatermarkValueType> {
        return [
            this.opacity,
            this.position,
            this.x,
            this.y,
            this.scale,
        ];
    }
}

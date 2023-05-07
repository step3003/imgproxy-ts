import {AutoRotateValueType} from "../options/autoRotate";
import {BluValueType} from "../options/blur";
import {DprValueType} from "../options/dpr";
import {EnlargeValueType} from "../options/enlarge";
import {ExtendGravityValueType, ExtendOptionType} from "../options/extend";
import {GravityAxisOption, GravityValueType} from "../options/gravity";
import {HeightValueType} from "../options/height";
import {MinWidthValueType} from "../options/minWidth";
import {MinHeightValueType} from "../options/minHeight";
import {PaddingNumberType} from "../options/padding";
import {QualityValueType} from "../options/quality";
import {ResizeTypeValueType} from "../options/resizeType";
import {SharpenValueType} from "../options/sharpen";
import {WatermarkValueType} from "../options/watermark";


export type BooleanType = boolean;

export type NumberType = number;

export type StringType = number;


export type OptionDataType =  Array<BluValueType> |
    Array<DprValueType> |
    Array<EnlargeValueType> |
    Array<ExtendGravityValueType> |
    Array<ExtendOptionType> |
    Array<ImageFormatType> |
    Array<GravityValueType | GravityAxisOption> |
    Array<HeightValueType> |
    Array<MinHeightValueType> |
    Array<MinWidthValueType> |
    Array<PaddingNumberType> |
    Array<QualityValueType> |
    Array<ResizeTypeValueType> |
    Array<AutoRotateValueType> |
    Array<SharpenValueType> |
    Array<WatermarkValueType>;


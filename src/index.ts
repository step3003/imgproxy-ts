import express, { Request, Response } from "express";
import * as process from "process";
import * as console from "console";
import {UrlBuilder} from "./common/urlBuilder";
import {Height} from "./options/height";
import {Enlarge} from "./options/enlarge";
import {Width} from "./options/width";
import {ResizeType} from "./options/resizeType";
import {Gravity, GravityValueType} from "./options/gravity";
import {Dpr} from "./options/dpr";
import {Extend} from "./options/extend";
import {Padding} from "./options/padding";
import {AutoRotate} from "./options/autoRotate";
import {Blur} from "./options/blur";
import {Sharpen} from "./options/sharpen";
import {Quality} from "./options/quality";


const PORT = process.env.PORT || 3002

const app = express();


app.use(express.json());

const src = 'link';

const key = 'salt';
const salt = 'key';
const imgProxyUrl = 'link';

const builder = UrlBuilder.signed(key, salt).with(
    new Height(400),
    new Enlarge(1),
    new Width(400),
    new ResizeType('fill'),
    new Gravity(GravityValueType.EAST, 1, 1),
    new Dpr(2),
    new Extend(true),
    new Padding(20, 20, 20, 20),
    new AutoRotate(true),
    new Blur(10),
    new Sharpen(10),
    new Quality(0),
)

console.log(imgProxyUrl + builder.url(src))

app.listen(PORT, () => {
    console.log(`app running on port ${PORT}`)
})

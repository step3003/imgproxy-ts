import {UrlSigner} from "../common/urlSigner";
import {Option} from "../options/option";
import {ImageFormat} from "../common/imageFormat";
import * as console from "console";

export class UrlBuilder {
    private static readonly INSECURE_SIGN = 'insecure';
    private readonly signer: UrlSigner | null;
    private encoded: boolean = true;
    private splitSize = 16;
    private options: Option[] = [];

    constructor(signer: UrlSigner | null = null) {
        this.signer = signer;
    }

    static signed(key: string, salt: string): UrlBuilder {
        return new UrlBuilder(new UrlSigner(key, salt));
    }

    _options() {
        return this.options;
    }

    with(...options: Option[]): UrlBuilder {
        const builder = this.clone(this);
        builder.options = [...this.options, ...options];

        return builder;
    }

    _encoded(encoded: boolean): UrlBuilder {
        const builder = this.clone(this);
        builder.encoded = encoded;

        return builder;
    }

    split(size: number): UrlBuilder {
        const builder = this.clone(this);
        builder.splitSize = size;

        return builder;
    }

    url(src: string, extension: string | null = null): string {
        const format = extension ? new ImageFormat(extension) : null;
        const opt = this.options.join('/');
        const path = `/${opt}/${this.source(src, format)}`;

        return `/${this.signature(path)}${path}`;
    }

    private source(src: string, format: ImageFormat | null): string {
        let sep: string;
        let source: string;

        if (this.encoded) {
            sep = '.';
            source = this.encode(src);

            if (this.splitSize > 0) {
                source = source.match(new RegExp(`.{1,${this.splitSize}}`, 'g'))!.join('/');
            }
        } else {
            sep = '@';
            source = `plain/${src}`.replace(sep, '%40');
            console.log(source)
        }

        const extension = format && !format.isEquals(this.extension(src)) ? format.value() : null;

        return [source, extension].filter(Boolean).join(sep);
    }

    private encode(url: string): string {
        return Buffer.from(url).toString('base64').replace(/=/g, '').replace(/\+/g, '-').replace(/\//g, '_')
    }

    private signature(path: string): string {
        if (this.signer !== null) {
            return this.signer.sign(path);
        }

        return UrlBuilder.INSECURE_SIGN;
    }

    private extension(src: string): string {
        return src.split('.').pop() || '';
    }

    private clone(urlBuilder: UrlBuilder): UrlBuilder {
        const newBuilder:UrlBuilder = new UrlBuilder(this.signer);
        newBuilder.encoded = this.encoded;
        newBuilder.splitSize = this.splitSize;
        newBuilder.options = [...this.options];

        return newBuilder;
    }
}

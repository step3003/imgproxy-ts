export class Format {
    extension: ImageFormatType;

    constructor(extension: ImageFormatType) {
        this.extension = extension;
    }

    name(): string {
        return 'f';
    }

    data(): Array<ImageFormatType> {
        return [
            this.extension
        ];
    }
}

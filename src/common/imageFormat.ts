export class ImageFormat {
    private static readonly SUPPORTED = [
        'png', 'jpg', 'jpeg', 'webp', 'avif', 'gif', 'ico',
        'svg', 'heic', 'bmp', 'tiff', 'pdf', 'mp4',
    ];

    private readonly extension: string;

    constructor(extension: string) {
        this.extension = this.cast(extension);

        if (!ImageFormat.isSupported(this.extension)) {
            throw new Error(`Invalid image format: ${extension}`);
        }
    }

    public static isSupported(value: string): boolean{
        return this.SUPPORTED.includes(value);
    }

    isEquals(extension: string): boolean {
        return this.extension === this.cast(extension);
    }

    value(): string
    {
        return this.extension;
    }

    private cast(extension: string): string {
        return extension.trim().toLowerCase();
    }
}

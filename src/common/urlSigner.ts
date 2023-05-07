import crypto from 'crypto';

import * as console from "console";

export class UrlSigner {
    private readonly salt: Buffer;
    private readonly key: Buffer;

    constructor(key: string, salt: string) {
        this.key = Buffer.from(key, 'hex');
        this.salt = Buffer.from(salt, 'hex');
    }

    public sign(str: string): string {
        const hmac =  crypto.createHmac('sha256', this.key)
        hmac.update(this.salt);
        hmac.update(str);

        return this.urlSafeBase64(hmac.digest());
    }

     private urlSafeBase64 = (string: any) => {
        return Buffer.from(string).toString('base64').replace(/=/g, '').replace(/\+/g, '-').replace(/\//g, '_')
    }
}

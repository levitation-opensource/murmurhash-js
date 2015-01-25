    /**
     * JS Implementation of MurmurHash3 (r152) (as of May 10, 2013)
     * 
     * @author <a href="mailto:roland@simplify.ee">Roland Pihlakas</a>
     * @see http://github.com/levitation/murmurhash-js
     * @author <a href="mailto:aappleby@gmail.com">Austin Appleby</a>
     * @see https://code.google.com/p/smhasher/
     * 
     * @param {string} key ASCII only
     * @param {number} seed positive integer only
     * @return {number} 32-bit positive integer hash 
     */

    function murmurhash3_32_rp(key, seed) {

        var keyLength, tailLength, tailLength4, bodyLength, bodyLength8, h1, k1, i, c1_low, c1_high, c2_low, c2_high, k1B;

        keyLength = key.length;
        tailLength = keyLength & 3;
        bodyLength = keyLength - tailLength;
        tailLength4 = bodyLength & 7;
        bodyLength8 = bodyLength - tailLength4;
        h1 = seed;

        //c1 = 0xcc9e2d51;
        c1_low = 0x2d51;
        c1_high = 0xcc9e0000;

        //c2 = 0x1b873593;
        c2_low = 0x3593;
        c2_high = 0x1b870000;


        //----------
        // body

        i = 0;

        while (i < bodyLength8) {

            k1 =
                ((key.charCodeAt(i) & 0xff)) |
                ((key.charCodeAt(++i) & 0xff) << 8) |
                ((key.charCodeAt(++i) & 0xff) << 16) |
                ((key.charCodeAt(++i) & 0xff) << 24);
            
            k1B =
                ((key.charCodeAt(++i) & 0xff)) |
                ((key.charCodeAt(++i) & 0xff) << 8) |
                ((key.charCodeAt(++i) & 0xff) << 16) |
                ((key.charCodeAt(++i) & 0xff) << 24);
            
            ++i;
            

            //k1 *= c1;
            k1 = (c1_high * k1 | 0) + (c1_low * k1);
            //k1 = ROTL32(k1,15);
            k1 = (k1 << 15) | (k1 >>> 17);
            //k1 *= c2;
            k1 = (c2_high * k1 | 0) + (c2_low * k1);
            
            //h1 ^= k1;
            h1 ^= k1;
            //h1 = ROTL32(h1,13); 
            h1 = (h1 << 13) | (h1 >>> 19);
            //h1 = h1*5+0xe6546b64;
            h1 = h1 * 5 + 0xe6546b64;
            
    
            //k1 *= c1;
            k1B = (c1_high * k1B | 0) + (c1_low * k1B);
            //k1 = ROTL32(k1,15);
            k1B = (k1B << 15) | (k1B >>> 17);
            //k1 *= c2;
            k1B = (c2_high * k1B | 0) + (c2_low * k1B);
            
            //h1 ^= k1;
            h1 ^= k1B;
            //h1 = ROTL32(h1,13); 
            h1 = (h1 << 13) | (h1 >>> 19);
            //h1 = h1*5+0xe6546b64;
            h1 = h1 * 5 + 0xe6546b64;

        }   //while (i < bodyLength8) {

        
        if (tailLength4) {

            k1 =
                ((key.charCodeAt(i) & 0xff)) |
                ((key.charCodeAt(++i) & 0xff) << 8) |
                ((key.charCodeAt(++i) & 0xff) << 16) |
                ((key.charCodeAt(++i) & 0xff) << 24);

            ++i;
                
            //k1 *= c1;
            k1 = (c1_high * k1 | 0) + (c1_low * k1);
            //k1 = ROTL32(k1,15);
            k1 = (k1 << 15) | (k1 >>> 17);
            //k1 *= c2;
            k1 = (c2_high * k1 | 0) + (c2_low * k1);

            //h1 ^= k1;
            h1 ^= k1;
            //h1 = ROTL32(h1,13); 
            h1 = (h1 << 13) | (h1 >>> 19);
            //h1 = h1*5+0xe6546b64;
            h1 = h1 * 5 + 0xe6546b64;
            
        }   //if (tailLength4) {


        //----------
        // tail

        k1 = 0;

        switch (tailLength) {

            case 3: k1 ^= (key.charCodeAt(i + 2) & 0xff) << 16;
            case 2: k1 ^= (key.charCodeAt(i + 1) & 0xff) << 8;
            case 1: k1 ^= (key.charCodeAt(i) & 0xff);

                //k1 *= c1;
                k1 = (c1_high * k1 | 0) + (c1_low * k1);
                //k1 = ROTL32(k1,15);
                k1 = (k1 << 15) | (k1 >>> 17);
                //k1 *= c2;
                k1 = (c2_high * k1 | 0) + (c2_low * k1);
                //h1 ^= k1;
                h1 ^= k1;

        }   //switch (tailLength) {


        //----------
        // finalization

        h1 ^= keyLength;

        //h1 = fmix32(h1);
        {
            //h ^= h >> 16;
            h1 ^= h1 >>> 16;
            //h1 *= 0x85ebca6b;
            h1 = (0x85eb0000 * h1 | 0) + (0xca6b * h1);
            //h ^= h >> 13;
            h1 ^= h1 >>> 13;
            //h1 *= 0xc2b2ae35;
            h1 = (0xc2b20000 * h1 | 0) + (0xae35 * h1);
            //h ^= h >> 16;
            h1 ^= h1 >>> 16;
        }


        return h1 >>> 0;    //convert to unsigned int

    }   //function murmurhash3_32_rp(key, seed) {

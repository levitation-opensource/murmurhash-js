# MurmurHash.js

An optimized JavaScript implementation of the MurmurHash-3 algorithm.

This algorithm takes a JavaScript string and a seed, and quickly creates a non-cryptographic 32-bit hash from it.

More information about this algorithm can be found at:

*	[MurmurHash homepage](https://code.google.com/p/smhasher/)
*	[Wikipedia entry on MurmurHash](http://en.wikipedia.org/wiki/MurmurHash) 

There is alternative earlier implementation available at:

* [MurmurHash 3 and 2 by Cary Gourt](http://github.com/garycourt/murmurhash-js)

My implementation is based on the observation that JavaScript is not limited exactly to 32-bit integers. Rather, it internally represents integers as double-precision floats. Therefore it is limited to 52-bit integers (the mantissa length). 52 bits is enough to contain 48 bits of information, and thanks to the flexibility of floating point it is able to do that for various exponents / shift positions. Therefore it is able to contain the result of multiplying 32-bit and 16-bit numbers without loss of lowest 16 bits for the low part of result, and without loss of next 16 bits for the high part of result - the latter is thanks to the flexibility of floating point - the lowest 16 bits are unused in the high part of result (the exponent part of floating point is correspondingly bigger) and next 48 bits are stored in the floating point mantissa, until highest 32 bits are cleared out in the code. This observation enables the algorithm to be implemented so that it requires less operations to emulate multiplications of 32-bit members, as compared to an algorithm that uses multiplications of 16-bit members to emulate multiplications of 32-bit members. Also because of that, addition of 32-bit operands can be performed simpler.

The performance comparison of the two algorithms can be found below. The performance varies across computers, in some computers they perform about same. In some computers my version is about 20% faster.

* [JSPerf comparison of the MurmurHash-JS implementations](http://jsperf.com/murmurhash3-comparison/6)

Result equality test against Gary's implementation is here:

* [JSFiddle-based test](http://jsfiddle.net/4u0ve7ux/10/)

## License (MIT)

Copyright (c) 2015 Roland Pihlakas

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

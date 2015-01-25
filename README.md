# MurmurHash.js

An optimized JavaScript implementation of the MurmurHash-3 algorithm.

This algorithm takes a JavaScript string and a seed, and quickly creates a non-cryptographic 32-bit hash from it.

More information about this algorithm can be found at:

*	[MurmurHash homepage](https://code.google.com/p/smhasher/)
*	[Wikipedia entry on MurmurHash](http://en.wikipedia.org/wiki/MurmurHash) 

There is alternative earlier implementation available at:

* [MurmurHash 3 and 2 by Cary Gourt](http://github.com/garycourt/murmurhash-js)

The implementation is based on the observation that JavaScript is not limited to exactly to 32-bit integers. Rather, it internally represents integers as double-precision floats. Therefore it is limited to 52-bit integers (the mantissa length). 52 bits is enough to contain 48 bits and therefore it is able to contain the result of multiplying 32-bit and 16-bit numbers without loss of lower 16 bits for the low part of result, and without loss of next 16 bits for the high part of result - thanks to the flexibility of floating point. This observation enables the algorithm to be implemented so that it requires less operations to emulate 32-bit multiplications, as compared to an algorithm that uses 16-bit multiplications to emulate 32-bit multiplications. Also because of that, addition of 32-bit operands can be performed simpler.

The performance comparison of the two algorithms can be found below. The performance varies across computers, in some computers they perform about same. In some computers my version is about 20% faster.

* [JSPerf comparison of the MurmurHash-JS implementations](http://jsperf.com/murmurhash3-comparison/2)

Result equality test against Gary's implementation is here:

* [JSFiddle-based test](http://jsfiddle.net/4u0ve7ux/2/)

## License (MIT)

Copyright (c) 2015 Roland Pihlakas

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

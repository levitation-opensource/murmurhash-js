# MurmurHash.js

An optimized JavaScript implementation of the MurmurHash algorithms.

This algorithm takes a JavaScript string and a seed, and quickly creates a non-cryptographic 32-bit hash from it.

More information about these algorithms can be found at:

*	[MurmurHash Homepage](http://sites.google.com/site/murmurhash/)
*	[Wikipedia Entry on MurmurHash](http://en.wikipedia.org/wiki/MurmurHash) 

There is alternative earlier implementation available at:

* [MurmurHash 3 and 2 by Cary Gourt](http://github.com/garycourt/murmurhash-js)

The performance comparison of the two algorithms can be found below. The performance varies across computers, in some computers they perform about same. In some computers my version is about 20% faster.

* [JSPerf comparison of the MurmurHash-JS implementations](http://jsperf.com/murmurhash3-comparison)

## License (MIT)

Copyright (c) 2015 Roland Pihlakas

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

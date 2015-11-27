array-dtype
===
[![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Coverage Status][codecov-image]][codecov-url] [![Dependencies][dependencies-image]][dependencies-url]

> Returns an array data type corresponding to an array constructor name.


## Installation

``` bash
$ npm install dstructs-array-dtype
```

For use in the browser, use [browserify](https://github.com/substack/node-browserify).


## Usage

``` javascript
var getType = require( 'dstructs-array-dtype' );
```

#### getType( name )

Returns an `array` data type corresponding to an `array` constructor name.

``` javascript
var dtype = getType( 'Float32Array' );
// returns 'float32'

var arr = new Float32Array( 10 );

dtype = getType( Object.prototype.toString.call( arr ).slice(8,-1) );
// returns 'float32'

// Note: not supported in IE
dtype = getType( arr.constructor.name );
// returns 'float32'
```

The following `array` constructors are supported:

| Constructor | Data Type |
|:----------|:------------|
| [`Int8Array`][Int8Array] | int8 | 
| [`Uint8Array`][Uint8Array] | uint8 | 
| [`Uint8ClampedArray`][Uint8ClampedArray] | uint8_clamped |
| [`Int16Array`][Int16Array] | int16 |
| [`Uint16Array`][Uint16Array] | uint16 |
| [`Int32Array`][Int32Array] | int32 |
| [`Uint32Array`][Uint32Array] | uint32 |
| [`Float32Array`][Float32Array] | float32 |
| [`Float64Array`][Float64Array] | float64 |
| [`Array`][Array] | generic |


## Examples

``` javascript
var getType = require( 'dstructs-array-dtype' );

console.log( getType( 'Int8Array' ) );
// returns 'int8'

console.log( getType( 'Uint8Array' ) );
// returns 'uint8'

console.log( getType( 'Uint8ClampedArray' ) );
// returns 'uint8_clamped'

console.log( getType( 'Int16Array' ) );
// returns 'int16'

console.log( getType( 'Uint16Array' ) );
// returns 'uint16'

console.log( getType( 'Int32Array' ) );
// returns 'int32'

console.log( getType( 'Uint32Array' ) );
// returns 'uint32'

console.log( getType( 'Float32Array' ) );
// returns 'float32'

console.log( getType( 'Float64Array' ) );
// returns 'float64'

console.log( getType( 'Array' ) );
// returns 'generic'

console.log( getType( 'Object' ) );
// returns null

console.log( getType( 'String' ) );
// returns null

console.log( getType( 'Boolean' ) );
// returns null

console.log( getType( 'Number' ) );
// returns null

console.log( getType( 'null' ) );
// returns null

console.log( getType( [] ) );
// returns null

console.log( getType( null ) );
// returns null

console.log( getType( {} ) );
// returns null
```

To run the example code from the top-level application directory,

``` bash
$ node ./examples/index.js
```


## Tests

### Unit

Unit tests use the [Mocha][mocha] test framework with [Chai][chai] assertions. To run the tests, execute the following command in the top-level application directory:

``` bash
$ make test
```

All new feature development should have corresponding unit tests to validate correct functionality.


### Test Coverage

This repository uses [Istanbul][istanbul] as its code coverage tool. To generate a test coverage report, execute the following command in the top-level application directory:

``` bash
$ make test-cov
```

Istanbul creates a `./reports/coverage` directory. To access an HTML version of the report,

``` bash
$ make view-cov
```


---
## License

[MIT license](http://opensource.org/licenses/MIT).


## Copyright

Copyright &copy; 2015. The Compute.io Authors.


[npm-image]: http://img.shields.io/npm/v/dstructs-array-dtype.svg
[npm-url]: https://npmjs.org/package/dstructs-array-dtype

[travis-image]: http://img.shields.io/travis/dstructs/array-dtype/master.svg
[travis-url]: https://travis-ci.org/dstructs/array-dtype

[codecov-image]: https://img.shields.io/codecov/c/github/dstructs/array-dtype/master.svg
[codecov-url]: https://codecov.io/github/dstructs/array-dtype?branch=master

[dependencies-image]: http://img.shields.io/david/dstructs/array-dtype.svg
[dependencies-url]: https://david-dm.org/dstructs/array-dtype

[dev-dependencies-image]: http://img.shields.io/david/dev/dstructs/array-dtype.svg
[dev-dependencies-url]: https://david-dm.org/dev/dstructs/array-dtype

[github-issues-image]: http://img.shields.io/github/issues/dstructs/array-dtype.svg
[github-issues-url]: https://github.com/dstructs/array-dtype/issues

[mocha]: http://mochajs.org/
[chai]: http://chaijs.com
[istanbul]: https://github.com/gotwarlost/istanbul

[Int8Array]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Int8Array
[Uint8Array]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Uint8Array
[Uint8ClampedArray]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Uint8ClampedArray
[Int16Array]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Int16Array
[Uint16Array]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Uint16Array
[Int32Array]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Int32Array
[Uint32Array]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Uint32Array
[Float32Array]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Float32Array
[Float64Array]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Float64Array
[Array]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array

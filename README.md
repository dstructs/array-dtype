Array dtypes
===
[![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Coverage Status][coveralls-image]][coveralls-url] [![Dependencies][dependencies-image]][dependencies-url]

> Returns an array data type corresponding to an array constructor name.


## Installation

``` bash
$ npm install compute-array-dtypes
```

For use in the browser, use [browserify](https://github.com/substack/node-browserify).


## Usage

``` javascript
var getType = require( 'compute-array-dtypes' );
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
| [`Int8Array`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Int8Array) | int8 | 
| [`Uint8Array`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Uint8Array) | uint8 | 
| [`Uint8ClampedArray`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Uint8ClampedArray) | uint8_clamped |
| [`Int16Array`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Int16Array) | int16 |
| [`Uint16Array`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Uint16Array) | uint16 |
| [`Int32Array`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Int32Array) | int32 |
| [`Uint32Array`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Uint32Array) | uint32 |
| [`Float32Array`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Float32Array) | float32 |
| [`Float64Array`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Float64Array) | float64 |
| [`Array`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array) | generic |


## Examples

``` javascript
var getType = require( 'compute-array-dtypes' );

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

Unit tests use the [Mocha](http://mochajs.org/) test framework with [Chai](http://chaijs.com) assertions. To run the tests, execute the following command in the top-level application directory:

``` bash
$ make test
```

All new feature development should have corresponding unit tests to validate correct functionality.


### Test Coverage

This repository uses [Istanbul](https://github.com/gotwarlost/istanbul) as its code coverage tool. To generate a test coverage report, execute the following command in the top-level application directory:

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


[npm-image]: http://img.shields.io/npm/v/compute-array-dtypes.svg
[npm-url]: https://npmjs.org/package/compute-array-dtypes

[travis-image]: http://img.shields.io/travis/compute-io/array-dtypes/master.svg
[travis-url]: https://travis-ci.org/compute-io/array-dtypes

[coveralls-image]: https://img.shields.io/coveralls/compute-io/array-dtypes/master.svg
[coveralls-url]: https://coveralls.io/r/compute-io/array-dtypes?branch=master

[dependencies-image]: http://img.shields.io/david/compute-io/array-dtypes.svg
[dependencies-url]: https://david-dm.org/compute-io/array-dtypes

[dev-dependencies-image]: http://img.shields.io/david/dev/compute-io/array-dtypes.svg
[dev-dependencies-url]: https://david-dm.org/dev/compute-io/array-dtypes

[github-issues-image]: http://img.shields.io/github/issues/compute-io/array-dtypes.svg
[github-issues-url]: https://github.com/compute-io/array-dtypes/issues

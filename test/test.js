/* global require, describe, it */
'use strict';

// MODULES //

var // Expectation library:
	chai = require( 'chai' ),

	// Module to be tested:
	getType = require( './../lib' );


// VARIABLES //

var expect = chai.expect,
	assert = chai.assert;


// TESTS //

describe( 'compute-array-dtype', function tests() {

	it( 'should export a function', function test() {
		expect( getType ).to.be.a( 'function' );
	});

	it( 'should return array data types', function test() {
		assert.strictEqual( getType( 'Int8Array' ), 'int8' );

		assert.strictEqual( getType( 'Uint8Array' ), 'uint8' );

		assert.strictEqual( getType( 'Uint8ClampedArray' ), 'uint8_clamped' );

		assert.strictEqual( getType( 'Int16Array' ), 'int16' );

		assert.strictEqual( getType( 'Uint16Array' ), 'uint16' );

		assert.strictEqual( getType( 'Int32Array' ), 'int32' );

		assert.strictEqual( getType( 'Uint32Array' ), 'uint32' );

		assert.strictEqual( getType( 'Float32Array' ), 'float32' );

		assert.strictEqual( getType( 'Float64Array' ), 'float64' );

		assert.strictEqual( getType( 'Array' ), 'generic' );
	});

	it( 'should return `null` if provided an unrecognized/unsupported constructor name', function test() {
		var values = [
			'Object',
			'String',
			'Function',
			'Number',
			'Boolean',
			'null',
			true,
			NaN,
			null,
			undefined,
			{},
			[],
			function(){}
		];

		for ( var i = 0; i < values.length; i++ ) {
			assert.isNull( getType( values[ i ] ), values[ i ] );
		}
	});

});

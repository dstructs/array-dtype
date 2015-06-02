'use strict';

var getType = require( './../lib' );

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

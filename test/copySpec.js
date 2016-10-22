var expect = require('chai').expect;
var copy = require('../index');
describe('copy', function() {
    describe('Clone primitive objects', function() {
        it('integer number', function() {
            expect(copy(1)).to.equal(1);
        });
        it('float number', function() {
            expect(copy(0.5)).to.equal(0.5);
        });
        it('NaN', function() {
            expect(copy(NaN)).to.be.NaN;
        });
        it('Infinity', function() {
            expect(copy(Infinity)).to.equal(Infinity);
        });
        it('string', function(){
            expect('some string').to.equal('some string');
        });
        it('boolean', function(){
            expect(copy(true)).to.equal(true);
            expect(copy(false)).to.equal(false);
        });
        it('null', function(){
            expect(copy(null)).to.equal(null);
        });
        it('undefined', function(){
            expect(copy(undefined)).to.equal(undefined);
        });
    });
    describe('Clone native objects', function() {

        it('Int8Array', function(){
            // From a length
            var arr = new Int8Array(2);
            arr[0] = 42;
            var copied = copy(arr);

            expect(copied).to.not.equal(arr);
            expect(copied).to.be.a('int8array');
            expect(copied[0]).to.equal(42);
            expect(copied[1]).to.equal(0);
            expect(copied.length).to.equal(2);
            expect(copied.BYTES_PER_ELEMENT).to.equal(1);

            // From an array
            var arr_1 = new Int8Array([21,31, 5]);
            var copied_1 = copy(arr_1);

            expect(copied_1).to.not.equal(arr_1);
            expect(copied_1[1]).to.equal(31);
            expect(copied_1.length).to.equal(3);

            // From an ArrayBuffer
            var buffer = new ArrayBuffer(8);
            var arr_2 = new Int8Array(buffer, 1, 4);
            var copied_2 = copy(arr_2);

            expect(copied_2).to.not.equal(arr_2);
            expect(copied_2[1]).to.equal(0);
            expect(copied_2.length).to.equal(4);
        });

        it('Int16Array', function(){
            // From a length
            var arr = new Int16Array(2);
            arr[0] = 42;
            var copied = copy(arr);

            expect(copied).to.not.equal(arr);
            expect(copied).to.be.a('int16array');
            expect(copied[0]).to.equal(42);
            expect(copied[1]).to.equal(0);
            expect(copied.length).to.equal(2);
            expect(copied.BYTES_PER_ELEMENT).to.equal(2);

            // From an array
            var arr_1 = new Int16Array([21,31, 5]);
            var copied_1 = copy(arr_1);

            expect(copied_1).to.not.equal(arr_1);
            expect(copied_1[1]).to.equal(31);
            expect(copied_1.length).to.equal(3);

            // From an ArrayBuffer
            var buffer = new ArrayBuffer(8);
            var arr_2 = new Int16Array(buffer, 0, 4);
            var copied_2 = copy(arr_2);

            expect(copied_2).to.not.equal(arr_2);
            expect(copied_2[1]).to.equal(0);
            expect(copied_2.length).to.equal(4);
        });
        it('Int32Array', function(){
            // From a length
            var arr = new Int32Array(2);
            arr[0] = 42;
            var copied = copy(arr);

            expect(copied).to.not.equal(arr);
            expect(copied).to.be.a('int32array');
            expect(copied[0]).to.equal(42);
            expect(copied[1]).to.equal(0);
            expect(copied.length).to.equal(2);
            expect(copied.BYTES_PER_ELEMENT).to.equal(4);

            // From an array
            var arr_1 = new Int32Array([21,31, 5]);
            var copied_1 = copy(arr_1);

            expect(copied_1).to.not.equal(arr_1);
            expect(copied_1[1]).to.equal(31);
            expect(copied_1.length).to.equal(3);

            // From an ArrayBuffer
            var buffer = new ArrayBuffer(16);
            var arr_2 = new Int32Array(buffer, 0, 4);
            var copied_2 = copy(arr_2);

            expect(copied_2).to.not.equal(arr_2);
            expect(copied_2[1]).to.equal(0);
            expect(copied_2.length).to.equal(4);
        });
        it('Float32Array', function(){
            // From a length
            var arr = new Float32Array(2);
            arr[0] = 42;
            var copied = copy(arr);

            expect(copied).to.not.equal(arr);
            expect(copied).to.be.a('float32array');
            expect(copied[0]).to.equal(42);
            expect(copied[1]).to.equal(0);
            expect(copied.length).to.equal(2);
            expect(copied.BYTES_PER_ELEMENT).to.equal(4);

            // From an array
            var arr_1 = new Float32Array([21,31, 5]);
            var copied_1 = copy(arr_1);

            expect(copied_1).to.not.equal(arr_1);
            expect(copied_1[1]).to.equal(31);
            expect(copied_1.length).to.equal(3);

            // From an ArrayBuffer
            var buffer = new ArrayBuffer(16);
            var arr_2 = new Float32Array(buffer, 0, 4);
            var copied_2 = copy(arr_2);

            expect(copied_2).to.not.equal(arr_2);
            expect(copied_2[1]).to.equal(0);
            expect(copied_2.length).to.equal(4);
        });
        it('Float64Array', function(){
            // From a length
            var arr = new Float64Array(2);
            arr[0] = 42;
            var copied = copy(arr);

            expect(copied).to.not.equal(arr);
            expect(copied).to.be.a('float64array');
            expect(copied[0]).to.equal(42);
            expect(copied[1]).to.equal(0);
            expect(copied.length).to.equal(2);
            expect(copied.BYTES_PER_ELEMENT).to.equal(8);

            // From an array
            var arr_1 = new Float64Array([21,31, 5]);
            var copied_1 = copy(arr_1);

            expect(copied_1).to.not.equal(arr_1);
            expect(copied_1[1]).to.equal(31);
            expect(copied_1.length).to.equal(3);

            // From an ArrayBuffer
            var buffer = new ArrayBuffer(32);
            var arr_2 = new Float64Array(buffer, 0, 4);
            var copied_2 = copy(arr_2);

            expect(copied_2).to.not.equal(arr_2);
            expect(copied_2[1]).to.equal(0);
            expect(copied_2.length).to.equal(4);
        });
        it('Uint8Array', function(){
            // From a length
            var arr = new Uint8Array(2);
            arr[0] = 42;
            var copied = copy(arr);

            expect(copied).to.not.equal(arr);
            expect(copied).to.be.a('uint8array');
            expect(copied[0]).to.equal(42);
            expect(copied[1]).to.equal(0);
            expect(copied.length).to.equal(2);
            expect(copied.BYTES_PER_ELEMENT).to.equal(1);

            // From an array
            var arr_1 = new Uint8Array([21,31, 5]);
            var copied_1 = copy(arr_1);

            expect(copied_1).to.not.equal(arr_1);
            expect(copied_1[1]).to.equal(31);
            expect(copied_1.length).to.equal(3);

            // From an ArrayBuffer
            var buffer = new ArrayBuffer(8);
            var arr_2 = new Uint8Array(buffer, 1, 4);
            var copied_2 = copy(arr_2);

            expect(copied_2).to.not.equal(arr_2);
            expect(copied_2[1]).to.equal(0);
            expect(copied_2.length).to.equal(4);
        });

        it('Uint8ClampedArray', function(){
            if(typeof Uint8ClampedArray !== 'undefined') {
                // From a length
                var arr = new Uint8ClampedArray(2);
                arr[0] = 42;
                arr[1] = 1337;
                var copied = copy(arr);

                expect(copied).to.not.equal(arr);
                expect(copied).to.be.a('uint8clampedarray');
                expect(copied[0]).to.equal(42);
                expect(copied[1]).to.equal(255);
                expect(copied.length).to.equal(2);
                expect(copied.BYTES_PER_ELEMENT).to.equal(1);

                // From an array
                var arr_1 = new Uint8ClampedArray([21, 31, 5]);
                var copied_1 = copy(arr_1);

                expect(copied_1).to.not.equal(arr_1);
                expect(copied_1[1]).to.equal(31);
                expect(copied_1.length).to.equal(3);

                // From an ArrayBuffer
                var buffer = new ArrayBuffer(8);
                var arr_2 = new Uint8ClampedArray(buffer, 1, 4);
                var copied_2 = copy(arr_2);

                expect(copied_2).to.not.equal(arr_2);
                expect(copied_2[1]).to.equal(0);
                expect(copied_2.length).to.equal(4);
            }
        });
        it('Uint16Array', function(){
            // From a length
            var arr = new Uint16Array(2);
            arr[0] = 42;
            var copied = copy(arr);

            expect(copied).to.not.equal(arr);
            expect(copied).to.be.a('uint16array');
            expect(copied[0]).to.equal(42);
            expect(copied[1]).to.equal(0);
            expect(copied.length).to.equal(2);
            expect(copied.BYTES_PER_ELEMENT).to.equal(2);

            // From an array
            var arr_1 = new Uint16Array([21,31, 5]);
            var copied_1 = copy(arr_1);

            expect(copied_1).to.not.equal(arr_1);
            expect(copied_1[1]).to.equal(31);
            expect(copied_1.length).to.equal(3);

            // From an ArrayBuffer
            var buffer = new ArrayBuffer(8);
            var arr_2 = new Uint16Array(buffer, 0, 4);
            var copied_2 = copy(arr_2);

            expect(copied_2).to.not.equal(arr_2);
            expect(copied_2[1]).to.equal(0);
            expect(copied_2.length).to.equal(4);
        });
        it('Uint32Array', function(){
            // From a length
            var arr = new Uint32Array(2);
            arr[0] = 42;
            var copied = copy(arr);

            expect(copied).to.not.equal(arr);
            expect(copied).to.be.a('uint32array');
            expect(copied[0]).to.equal(42);
            expect(copied[1]).to.equal(0);
            expect(copied.length).to.equal(2);
            expect(copied.BYTES_PER_ELEMENT).to.equal(4);

            // From an array
            var arr_1 = new Uint32Array([21,31, 5]);
            var copied_1 = copy(arr_1);

            expect(copied_1).to.not.equal(arr_1);
            expect(copied_1[1]).to.equal(31);
            expect(copied_1.length).to.equal(3);

            // From an ArrayBuffer
            var buffer = new ArrayBuffer(16);
            var arr_2 = new Uint32Array(buffer, 0, 4);
            var copied_2 = copy(arr_2);

            expect(copied_2).to.not.equal(arr_2);
            expect(copied_2[1]).to.equal(0);
            expect(copied_2.length).to.equal(4);
        });
        it('String', function(){
            var str = new String('some string');
            var copied = copy(str);

            expect(copied).to.not.equal(str);
            expect(copied).to.be.a('string');
            expect(copied.valueOf()).to.equal(str.valueOf());
        });
        it('Number', function(){
            var number = new Number(111.1);
            var copied = copy(number);

            expect(copied).to.not.equal(number);
            expect(copied).to.be.a('number');
            expect(copied.valueOf()).to.equal(number.valueOf());
        });

        it('Boolean', function(){
            var bool = new Boolean(true);
            var copied = copy(bool);

            expect(copied).to.not.equal(bool);
            expect(copied).to.be.a('boolean');
            expect(copied.valueOf()).to.equal(bool.valueOf());
        });

        it('Date', function(){
            var date = new Date();
            var copied = copy(date);

            expect(copied).to.not.equal(date);
            expect(copied).to.be.a('date');
            expect(copied.getTime()).to.equal(date.getTime());
        });

        it('RegExp', function(){
            var regExp = new RegExp('test\sregular\sexpression','ig');
            var copied = copy(regExp);

            expect(copied).to.not.equal(regExp);
            expect(copied).to.be.a('regexp');
            expect(copied.flags).to.equal(regExp.flags);
            expect(copied.source).to.equal(regExp.source);
        });

        it('ArrayBuffer', function(){
            var arrBuffer = new ArrayBuffer(8);
            var copied = copy(arrBuffer);

            expect(copied).to.not.equal(arrBuffer);
            expect(copied).to.be.a('arraybuffer');
            expect(copied.byteLength).to.equal(arrBuffer.byteLength);
        });

        it('Blob', function(){
            if(typeof Blob !== 'undefined') {
                var debug = {hello: "world"};
                var blob = new Blob([JSON.stringify(debug, null, 2)], {type: 'application/json'});
                var copied = copy(blob);

                expect(copied).to.not.equal(blob);
                expect(copied).to.be.a('blob');
                expect(copied.type).to.equal(blob.type);
                expect(copied.size).to.equal(blob.size);
            }
        });

        it('File', function(){
            if(typeof File !== 'undefined') {
                var debug = {hello: "world"};
                var file = new File([JSON.stringify(debug, null, 2)], 'test.json', {type: 'application/json'});
                var copied = copy(file);
                expect(copied).to.not.equal(file);
                expect(copied).to.be.a('file');
                expect(copied.name).to.equal(file.name);
                expect(copied.type).to.equal(file.type);
                expect(copied.size).to.equal(file.size);
            }
        });

        it('ImageData', function() {
            var canvas = document.createElement('canvas');
            var ctx = canvas.getContext('2d');
        })


    });
});
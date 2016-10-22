var copy = (function() {
    'use strict';
    function copy(obj1, obj2) {

        function applyObject(destination, source) {
            var keys = Object.keys(source);
            for (var i = 0, length = keys.length; i < length; i++) {
                destination[keys[i]] = clone(source[keys[i]]);
            }
            return destination;
        }

        function clone(value) {
            switch(typeof value) {
                case 'function':
                   return copyFunction(value);
                    return clone;
                    //TODO:
                    return;
                case 'object':
                    if (value === null) {
                        return null;
                    }
                    return copyObject(value);
            }
            return value;
        }

        function copyObject(value) {
            switch (Object.prototype.toString.call(value)) {
                case '[object Int8Array]':
                case '[object Int16Array]':
                case '[object Int32Array]':
                case '[object Float32Array]':
                case '[object Float64Array]':
                case '[object Uint8Array]':
                case '[object Uint8ClampedArray]':
                case '[object Uint16Array]':
                case '[object Uint32Array]':
                    return new value.constructor(value.subarray(0), value.byteOffset, value.length);
                case '[object String]':
                case '[object Number]':
                case '[object Boolean]':
                case '[object Date]':
                case '[object RegExp]':
                    return new value.constructor(value.valueOf());
                case '[object ArrayBuffer]':
                    return copyArrayBuffer(value);
                case '[object Blob]':
                    return new Blob([value], {type: value.type});
                case '[object File]':
                    return new File([value], value.name, {type: value.type});
                case '[object ImageData]':
                    return new ImageData(value.data, value.width, value.height);
                case '[object Object]':
                    return applyObject({}, value);
                case '[object Array]':
                case '[object FileList]':
                    return applyArray(new Array(value.length), value);
                default:
                    if (typeof value.cloneNode === 'function') {
                        return value.cloneNode(true);
                    }
                    return applyObject(Object.create(Object.getPrototypeOf(value)), value);

            }
        }

        /*function copyFile(value) {
            try {
                return new File([value], value.name, {type: value.type});
            }
            catch(e) {
                console.error('Browser does not support clone files returned same object');
                return value;
            }
        };*/

        function copyArrayBuffer(value) {
            if (!value.slice) {
                var copied = new ArrayBuffer(value.byteLength);
                new Uint8Array(copied).set(new Uint8Array(value));
                return copied;
            }
            return value.slice(0);
        }

        function copyFunction(value) {
            var newFn = function() {
                return value.apply(this, arguments);
            };
            newFn.prototype = value.prototype;
            var keys = Object.keys(value);
            for (var i=0, length=keys.length; i < length; i++) {
                var key = keys[i];
                newFn[key] = clone(value[key]);
            }
            return newFn;
        }

        function applyArray(destination, source) {
            for (var i = 0, length = source.length; i < length; i++) {
                destination[i] = clone(source[i]);
            }
            return destination;
        }

        if(obj2) {
            return applyObject(obj1, obj2);
        }
        return clone(obj1);
    }
    return copy;
})();

if (typeof module === 'object' && module.exports) {
    module.exports = copy;
}





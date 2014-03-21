if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    argsAsArray : function(fn, arr) {
        return fn.apply(fn, arr);

    },

    speak : function(fn, obj) {
        return fn.call(obj);
    },

    functionFunction : function(str) { 
            return function(str2) {
                return str + ', ' + str2;
         }
     },

    makeClosures : function(arr, fn) {
       var arr2 = [];

      var makeFn = function(val) {
        return function() { return fn(val); };
      };

      for (var i = 0, len = arr.length; i < len; i++) {
        arr2.push(makeFn(arr[i]));
      }

      return arr2;
    },

    partial : function(fn, str1, str2) {
        return function(str3) {
            return fn.call(null, str1, str2, str3);
        };
    },

    useArguments : function(arguments) {
        var sum = 0;

      for (var i = 0, len = arguments.length; i < len; i++) {
        sum += arguments[i];
      }

      return sum;
    },

    callIt : function(fn) {

    },

    partialUsingArguments : function(fn) {
         var args = Array.prototype.slice.call(arguments, 1, arguments.length);
      return function() {
        var moreArgs = args.concat(Array.prototype.slice.call(arguments));
        return fn.apply(null, moreArgs);
      };
    },

    curryIt : function(fn) {

    }
  };
});

if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    indexOf : function(arr, item) {
        return arr.indexOf(item);
    },

    sum : function(arr) {
        var total = 0;
        for (var i in arr) {
            total += arr[i];
        }
        return total;
    },

    remove : function(arr, item) {
        arr2 = [];
        for (var i = 0; i < arr.length; i++) {
            if (arr[i] !== item) {
                arr2.push(arr[i]);
            }
        }
        return arr2;
    },

    removeWithoutCopy : function(arr, item) {
         for (var i = 0; i < arr.length; i++) {
            if (arr[i] === item) {
                arr.splice(i, 1);
                i = i - 1;
            }
        }
        return arr
    },

    append : function(arr, item) {
        arr.push(item);
        return arr;

    },

    truncate : function(arr) {
        arr.pop();
        return arr;

    },

    prepend : function(arr, item) {
        arr.unshift(item);
        return arr;

    },

    curtail : function(arr) {
        arr.shift();
        return arr;

    },

    concat : function(arr1, arr2) {
        var arr3 = arr1.concat(arr2);
        return arr3;

    },

    insert : function(arr, item, index) {
        arr.splice(index, 0, item);
        return arr;

    },

    count : function(arr, item) {
        var i, j,
            count = 0;
            for (i=0, j=arr.length; i < j; i++) {
                (arr[i] === item) && count++;
            }
            return count;

    },

    duplicates : function(arr) {
        var sorted_array = arr.sort();
        var arr2 = [];
        var arr3 = [];
        for (var i = 0; i < arr.length-1; i++) {
            if (sorted_array[i+1] == sorted_array[i]) {
                arr2.push(sorted_array[i]);
            }
        }
        for (var i = 0; i < arr2.length-1; i++) {
            if (arr2[i] === arr2[i+1]) {
                arr2.splice(i, 1);
            }
        }
        return arr2;
    },

    square : function(arr) {
        arr2 = [];
        for (var i in arr) {
            x = arr[i] * arr[i];
            arr2.push(x);
        }
        return arr2;

    },

    findAllOccurrences : function(arr, target) {
        var arr2 = [];
        for (var i = 0; i < arr.length; i++) {
            if (arr[i] === target) {
                arr2.push(i);
            }
        }
        return arr2;
    },
};
});

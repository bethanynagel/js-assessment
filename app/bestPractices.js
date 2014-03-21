if (typeof define !== 'function') { var define = require('amdefine')(module); }

/**
 * This file defines an object with some methods. Some of these methods are
 * populated incorrectly; your job is to fix them. Other methods are not
 * populated at all; your job is to fill them out.
 */
define(function() {
  return {
    globals : function() {
      var myObject = {
        name : 'Jory'
      };

      return myObject;
    },

    functions : function(flag) {
      if (flag) {
        getValue = function() { 
          return 'a'; 
        }
      } 
      else {
        getValue = function() { 
          return 'b'; 
        }
      }

      return getValue();
    },

    parseInt : function(num) {
      x = parseInt(num, 10);
      return x
    },

    identity : function(val1, val2) {
      if (val1 === val2) {
        return true
      }
      else {
        return false
      }

    }
  };
});

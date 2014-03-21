if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    listFiles: function(data, dirName) {

    },

    permute: function(arr) {
    var retArr = [];

    var per = function(startArr, endArr){
    	for var(i=0; i<endArr.length; i++){
    		if (endArr.length>1){
    			(function(){
    				var newArr = startArr.slice();
    				newArr.push(endArr[i]);
    				var newEndArr = endArr.slice();
    				newEndArr.splice(i, 1);
    				return per(startArr, newEndArr)
    			})()
    		}else{
    			retArr.push(startArr.concat(endArr));
    		}
    	 }
    	}
    	per([],arr)
    }
  };
});

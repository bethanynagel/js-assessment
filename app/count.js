if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function () {
  return {
    count : function (start, end) {
        var interval = 0;
        function startTime() {
            console.log(start++);

        if (start <= end) {
            interval = setTimeout(startTime, 100);
        }
    }
    	startTime();
    	   
    	return {
            cancel: function() {
                interval = 0;
            }
        };
    }
  };
});
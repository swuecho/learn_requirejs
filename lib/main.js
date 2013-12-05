require.config({
  paths: {
      // specify a path to jquery, the second declaration is the local fallback
      jquery: ["//ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery",
              "jquery"]
     // add underscore here
  }
// learn use shim to deal with dependency
});


require(["jquery"], function($) {
    $(function() {
        console.log(1);
    });
    //This function is called when scripts/helper/util.js is loaded.
    //If util.js calls define(), then this function is not fired until
    //util's dependencies have loaded, and the util argument will hold
    //the module value for "helper/util".
});


require(['modules/shirt'], function(shirt) {
   console.log(shirt.color); 
});

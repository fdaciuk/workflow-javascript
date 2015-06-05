;(function( window, document, undefined ) {
  'use strict';

  function modelExample() {
    var $private = {};
    var $public = {};

    $private.privateVar = 'private var';

    $public.publicMethod = function() {
      return 'Init';
    };

    $private.privateMethod = function() {
      return 'Private method';
    };

    return $public;
  }

  window.MyGlobalObject = window.MyGlobalObject || {};
  window.MyGlobalObject.modelExample = modelExample();
})( window, document );

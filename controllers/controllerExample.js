;(function( window, document, undefined ) {

  'use strict';

  function controllerExample() {

    var $private = {};
    var $public = {};

    /**
     * Private Properties
     */
    $private.privateVar = 'private var';

    // -----------------------------------

    /**
     * Public Methods
     */
    $public.publicMethod = function() {
      return 'Init';
    };

    // -----------------------------------

    /**
     * Private Methods
     */
    $private.privateMethod = function() {
      return 'Private method';
    };

    // -----------------------------------

    return $public;

  }

  // Global
  window.MyGlobalObject = window.MyGlobalObject || {};
  window.MyGlobalObject.controllerExample = controllerExample();

})( window, document );

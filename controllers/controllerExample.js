;(function( window, document, undefined ) {

  "use strict";

  var controllerExample = (function() {

    var $private = {};
    var $public = {};

    /**
     * Private Variables
     */
    $private.privateVar = 'private var';

    // -----------------------------------

    /**
     * Public Variables
     */
    $public.publicVar = 'public var';

    // -----------------------------------

    /**
     * Private Methods
     */
    $private.privateMethod = function() {
      return 'Private method';
    };

    // -----------------------------------

    /**
     * Public Methods
     */
    $public.publicMethod = function() {
      return 'Init';
    };

    // -----------------------------------

    return $public;

  })();

  // Global
  window.controllerExample = controllerExample;

})( window, document );
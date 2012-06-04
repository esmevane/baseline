requirejs.config({
  shim: {
    'lib/backbone': {
      deps: [ 'lib/jquery', 'lib/underscore' ]
    },
    'lib/backbone-local-storage': {
      deps: [ 'lib/backbone' ]
    },
    'lib/bootstrap': {
      deps: [ 'lib/jquery' ]
    },
    'lib/chosen': {
      deps: [ 'lib/jquery' ]
    },
    'src/baseline': {
      deps: [
        'lib/backbone-local-storage',
        'lib/bootstrap',
        'lib/chosen'
      ]
    }
  }
});

require(
  [
    'src/baseline',
    'lib/jquery',
    'lib/underscore',
    'lib/backbone',
    'lib/backbone-local-storage',
    'lib/chosen',
    'lib/bootstrap'
  ],
  function(baseline) {
    window.BaselineApp = baseline;
  }
);
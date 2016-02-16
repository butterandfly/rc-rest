(function(window) {
  var restSetting = {
    restApis: {},
    host: {
      ip: 'localhost',
      port: '5000'
    },
    prefix: '',
    disableCross: true,
    // Store all the middlewares.
    middlewares: []
  };
  window.RcRestSetting = restSetting;
})(window);

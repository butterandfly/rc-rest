(function(window) {
  var restSetting = {
    restApis: {},
    // host: {
    //   ip: 'localhost',
    //   port: '5000'
    // },
    host: null,
    prefix: '',
    disableCross: true,
    // Store all the middlewares.
    middlewares: [],
    // Execute when get response
    respHook: null
  };
  window.RcRestSetting = restSetting;
})(window);

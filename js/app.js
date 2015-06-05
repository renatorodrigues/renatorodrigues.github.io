requirejs.config({
  baseUrl: 'js/lib',
  paths: {
    app: '../app',

    jquery: '//ajax.googleapis.com/ajax/libs/jquery/2.1.4/jquery.min'
  }
});

requirejs(['app/main']);

requirejs.config({
  baseUrl: 'js/lib',
  paths: {
    app: '../app',

    jquery: '//ajax.googleapis.com/ajax/libs/jquery/3.1.1/jquery.min'
  }
});

requirejs(['app/main']);

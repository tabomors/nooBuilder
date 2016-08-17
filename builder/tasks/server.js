'use strict';

var gulp         = require('gulp'), // Подключаем Gulp
    browserSync  = require('browser-sync'); // Подключаем BrowserSync

gulp.task('server', function() { // Создаем таск browser-sync
  browserSync({ // Выполняем browserSync
    server: { // Определяем параметры сервера
      port: 9000,
      baseDir: 'src' // Директория для сервера - src
    },
    notify: false // Отключаем уведомления
  });
});

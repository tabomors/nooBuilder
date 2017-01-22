(() => {
  'use strict';

  const gulp = require('gulp'), // Подключаем Gulp
        del = require('del'); // Подключаем библиотеку для удаления файлов и папок

  gulp.task('clean', () => del.sync('dist'));
})();

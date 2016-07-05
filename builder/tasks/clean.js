'use strict';

var 
    gulp         = require('gulp'), // Подключаем Gulp
    del          = require('del'); // Подключаем библиотеку для удаления файлов и папок

gulp.task('clean', function() {
  return del.sync('dist'); // Удаляем папку dist перед сборкой
});
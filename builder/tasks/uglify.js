'use strict';

var 
    gulp         = require('gulp'), // Подключаем Gulp
    browserSync  = require('browser-sync'), // Подключаем BrowserSync
    concat       = require('gulp-concat'), // Подключаем gulp-concat (для конкатенации файлов)
    uglify       = require('gulp-uglifyjs'); // Подключаем gulp-uglifyjs (для сжатия JS)

gulp.task('scripts', function() {
  return gulp.src(['src/js/main.js'])
    .pipe(concat('main.min.js')) // Собираем их в кучу в новом файле vendors.min.js
    .pipe(uglify()) // Сжимаем JS файл
    .pipe(gulp.dest('src/js')); // Выгружаем в папку src/js
});
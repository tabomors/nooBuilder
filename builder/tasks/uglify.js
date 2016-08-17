'use strict';

var gulp         = require('gulp'), // Подключаем Gulp
    browserSync  = require('browser-sync'), // Подключаем BrowserSync
    concat       = require('gulp-concat'), // Подключаем gulp-concat (для конкатенации файлов)
    uglify       = require('gulp-uglifyjs'), // Подключаем gulp-uglifyjs (для сжатия JS)
    sourcemaps	 = require("gulp-sourcemaps");

gulp.task('uglify', function() {
  return gulp.src('src/js/main.js')
    .pipe(uglify('main.min.js', {
      outSourceMap: true
    }))
    .pipe(gulp.dest('dist/js')); // Выгружаем в папку src/js
});

'use strict';

var gulp         = require('gulp'), // Подключаем Gulp
    csso         = require('gulp-csso'), // Подключаем пакет для минификации CSS
    sourcemaps	 = require('gulp-sourcemaps');

gulp.task('minify', ['scss'], function() {
  return gulp.src('src/css/main.css') // Выбираем файл для минификации
  		.pipe(sourcemaps.init())
  		.pipe(csso())
  		.pipe(sourcemaps.write('.'))
  		.pipe(gulp.dest('dist/css/'));
});

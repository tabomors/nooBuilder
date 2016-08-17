'use strict';

var gulp         = require('gulp'), // Подключаем Gulp
    pug          = require('gulp-pug'), //Подключаем pug
    plumber      = require('gulp-plumber'), //Подключаем Plumber
    nontify      = require('gulp-notify');

gulp.task('pug', function() {
  return gulp.src('src/pug/pages/*.pug')
    .pipe(pug({ pretty: true }))
    .on('error', nontify.onError(function(error) {
      return {
        title: 'Pug',
        message:  error.message
      }
     }))
     .pipe(gulp.dest('src'))
});

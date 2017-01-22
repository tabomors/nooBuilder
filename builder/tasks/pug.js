(() => {
  'use strict';

  const gulp = require('gulp'), // Подключаем Gulp
        pug = require('gulp-pug'), //Подключаем pug
        browserSync = require('browser-sync'), // Подключаем Browser Sync
        nontify = require('gulp-notify');

  gulp.task('pug', () => {
    return gulp.src('src/pug/pages/*.pug')
      .pipe(pug({ pretty: true }))
      .on('error', nontify.onError(function(error) {
        return {
          title: 'Pug',
          message: error.message
        };
      }))
      .pipe(gulp.dest('src'))
      .pipe(browserSync.reload({stream: true})); // Обновляем CSS на странице при изменении
  });
})();

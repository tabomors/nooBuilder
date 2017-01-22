(() => {
  'use strict';

  const browserify = require('browserify'),
        gulp = require('gulp'),
        source = require('vinyl-source-stream'),
        nontify = require('gulp-notify'),
        browserSync = require('browser-sync');

  gulp.task('browserify', () => {
    return browserify('src/js/app/index.js')
      .bundle()
      .on('error', nontify.onError(function(error) {
        return {
          title: 'Browserify',
          message: error.message
        };
      }))
      // Передаем имя файла, который получим на выходе, vinyl-source-stream
      .pipe(source('bundle.js'))
      .pipe(gulp.dest('src/js'))
      .pipe(browserSync.reload({stream: true})); // Обновляем CSS на странице при изменении
  });
})();

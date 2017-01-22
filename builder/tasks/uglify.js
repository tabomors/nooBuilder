(() => {
  'use strict';

  const gulp = require('gulp'), // Подключаем Gulp
        browserSync = require('browser-sync'), // Подключаем BrowserSync
        concat = require('gulp-concat'), // Подключаем gulp-concat (для конкатенации файлов)
        uglify = require('gulp-uglify'),
        sourcemaps = require('gulp-sourcemaps'),
        rename = require('gulp-rename');

  gulp.task('uglify', () => {
    return gulp.src('src/js/bundle.js')
      .pipe(sourcemaps.init())
        .pipe(uglify())
        .pipe(rename('bundle.min.js'))
      .pipe(sourcemaps.write('../maps'))
      .pipe(gulp.dest('dist/js'));
  });
})();

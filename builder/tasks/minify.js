(() => {
  'use strict';

  const gulp = require('gulp'), // Подключаем Gulp
        csso = require('gulp-csso'), // Подключаем пакет для минификации CSS
        sourcemaps = require('gulp-sourcemaps'),
        rename = require('gulp-rename');

  gulp.task('minify', ['scss'], () => {
    return gulp.src('src/css/main.css') // Выбираем файл для минификации
      .pipe(sourcemaps.init())
        .pipe(csso())
        .pipe(rename('main.min.css'))
      .pipe(sourcemaps.write('../maps'))
      .pipe(gulp.dest('dist/css/'));
  });
})();

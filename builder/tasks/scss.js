(() => {
  'use strict';

  const gulp = require('gulp'), // Подключаем Gulp
        scss = require('gulp-sass'), //Подключаем scss пакет,
        browserSync = require('browser-sync'), // Подключаем Browser Sync
        autoprefixer = require('gulp-autoprefixer'), // Подключаем пакет для автоматического добавления префиксов
        nontify = require('gulp-notify');

  gulp.task('scss', () => {
    return gulp.src('src/scss/**/*.scss')
      .pipe(scss())
      .on('error', nontify.onError(error => {
        return {
          title: 'SCSS',
          message: error.message
        };
      }))
      .pipe(autoprefixer(['last 3 version', '> 1%', 'ie 8', 'ie 9', 'Opera 12.1'], { cascade: true })) // Создаем префиксы
      .pipe(gulp.dest('src/css')) // Выгружаем результата в папку src/css
      .pipe(browserSync.reload({stream: true})); // Обновляем CSS на странице при изменении
  });
})();

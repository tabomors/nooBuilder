(() => {
  'use strict';

  const gulp = require('gulp'); // Подключаем Gulp

  gulp.task('build', ['clean', 'img', 'minify', 'uglify'], function() {

    const buildFonts = gulp.src('src/fonts/**/*') // Переносим шрифты в продакшен
            .pipe(gulp.dest('dist/fonts')),
          buildHtml = gulp.src('src/**/*.html') // Переносим HTML в продакшен
            .pipe(gulp.dest('dist'));
  });
})();

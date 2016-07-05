'use strict';

var 
    gulp         = require('gulp'); // Подключаем Gulp

gulp.task('build', ['clean', 'img', 'scss', 'scripts'], function() {

  var buildCss = gulp.src(['src/css/main.min.css']) // Переносим стили в продакшен
        .pipe(gulp.dest('dist/css')),

      buildFonts = gulp.src('src/fonts/**/*') // Переносим шрифты в продакшен
        .pipe(gulp.dest('dist/fonts')),

      buildJs = gulp.src('src/js/main.min.js') // Переносим скрипты в продакшен
        .pipe(gulp.dest('dist/js')),

      buildHtml = gulp.src('src/*.html') // Переносим HTML в продакшен
        .pipe(gulp.dest('dist'));

});
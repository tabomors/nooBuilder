'use strict';

var 
    gulp         = require('gulp'), // Подключаем Gulp
    browserSync  = require('browser-sync'); // Подключаем Browser Sync
  
gulp.task('watch', ['browser-sync', 'minify', 'scripts'], function() {
  gulp.watch('src/scss/**/*.scss', ['scss']); // Наблюдение за scss файлами в папке scss
  gulp.watch('src/pug/**/*.jade', ['pug']); // Наблюдение за jade файлами в папке scss
  gulp.watch('src/*.html', browserSync.reload); // Наблюдение за HTML файлами в корне проекта
  gulp.watch('src/js/**/*.js', browserSync.reload);   // Наблюдение за JS файлами в папке js
});
'use strict';

var gulp         = require('gulp'), // Подключаем Gulp
    browserSync  = require('browser-sync'); // Подключаем Browser Sync

gulp.task('watch', ['server'], function() {
  gulp.watch('src/scss/**/*.scss', ['scss']); // Наблюдение за scss файлами в папке scss
  gulp.watch('src/pug/**/*.pug', ['pug']); // Наблюдение за pug файлами в папке scss
  gulp.watch([
    'src/**/*.html',
    'src/js/**/*.js'
  ]).on('change', browserSync.reload);
});

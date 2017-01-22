(() => {
  'use strict';

  const gulp = require('gulp'), // Подключаем Gulp
        browserSync = require('browser-sync'); // Подключаем Browser Sync

  gulp.task('watch', ['server'], () => {
    gulp.watch('src/scss/**/*.scss', ['scss']); // Наблюдение за scss файлами в папке scss
    gulp.watch('src/pug/**/*.pug', ['pug']); // Наблюдение за pug файлами в папке scss
    gulp.watch('src/js/**/*.js', ['browserify']);
    // gulp.watch([
    //   'src/js/**/*.js'
    // ]).on('change', browserSync.reload);
  });
})();

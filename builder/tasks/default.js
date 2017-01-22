(() => {
  'use strict';

  const gulp = require('gulp'); // Подключаем Gulp

  gulp.task('default', ['pug', 'scss', 'browserify', 'server', 'watch']);
})();

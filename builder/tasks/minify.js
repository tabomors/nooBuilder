'use strict';

var 
    gulp         = require('gulp'), // Подключаем Gulp    
    cssnano      = require('gulp-cssnano'), // Подключаем пакет для минификации CSS
    rename       = require('gulp-rename'); // Подключаем библиотеку для переименования файлов

gulp.task('minify', ['scss'], function() {
  return gulp.src('src/css/main.css') // Выбираем файл для минификации
    .pipe(cssnano()) // Сжимаем
    .pipe(rename({suffix: '.min'})) // Добавляем суффикс .min
    .pipe(gulp.dest('src/css')); // Выгружаем в папку src/css
});

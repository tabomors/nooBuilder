'use strict';

var 
    gulp         = require('gulp'), // Подключаем Gulp
    pug          = require('gulp-pug'), //Подключаем pug
    plumber      = require('gulp-plumber'), //Подключаем Plumber
    browserSync  = require('browser-sync'); // Подключаем BrowserSync

gulp.task('pug', function() {  
   gulp.src(['src/pug/**/*.jade', '!src/pug/**/_*.jade'])
    .pipe(plumber())
    .pipe(pug({
        pretty: true
    }))
    .pipe(gulp.dest('src'))
    .pipe(browserSync.reload({stream: true})) // Обновляем HTML на странице при изменении
});
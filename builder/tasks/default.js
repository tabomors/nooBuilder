'use strict';

var gulp = require('gulp'), // Подключаем Gulp
    scss = require('gulp-sass'),
    pug  = require('gulp-pug');

gulp.task('default', ['pug', 'scss', 'watch']);

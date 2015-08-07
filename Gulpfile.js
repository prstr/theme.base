'use strict';

var gulp = require('gulp')
  , stylus = require('gulp-stylus')
  , autoprefixer = require('gulp-autoprefixer');

gulp.task('default', ['build-css']);

gulp.task('build-css', function () {
  return gulp.src('stylesheets/*.styl')
    .pipe(stylus({
      compress: true,
      'include css': true
    }))
    .pipe(autoprefixer())
    .pipe(gulp.dest('static/assets'));
});

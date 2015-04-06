"use strict";

var gulp = require('gulp');

gulp.task('stylesheets', function() {
  return gulp.src(['stylesheets/**/*.css', '!stylesheets/**/_*.css'])
    .pipe(require('gulp-postcss')([
      require('autoprefixer')(),
      require('postcss-import')(),
      require('postcss-simple-vars')()
    ]))
    .pipe(gulp.dest('static/stylesheets'));
});

gulp.task('build-stylesheets', ['stylesheets'], function() {
  return gulp.src('static/stylesheets/**/*.css')
    .pipe(require('gulp-minify-css')({
      keepBreaks: true
    }))
    .pipe(gulp.dest('static/stylesheets'));
});

gulp.task('build', ['build-stylesheets']);

gulp.task('default', function() {
  gulp.watch('stylesheets/**', ['stylesheets']);
});

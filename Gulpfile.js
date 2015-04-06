"use strict";

var gulp = require('gulp')
  , fs = require('fs-extra')
  , Theme = require('prostore.theme-tools');

gulp.task('stylesheets', function() {
  var theme = Theme(process.cwd());
  theme.compileOptions(function(err, vars){
    if (err) console.log(err);
    return gulp.src(['stylesheets/**/*.css', '!stylesheets/**/_*.css'])
      .pipe(require('gulp-postcss')([
        require('autoprefixer')(),
        require('postcss-import')(),
        require('postcss-discard-comments')(),
        require('postcss-color-function')(),
        require('postcss-simple-vars')({
          variables: vars
        })
      ]))
      .on('error', function(err) {
        console.error(err);
        this.emit('end');
      })
      .pipe(gulp.dest('static/stylesheets'));
  });

});

gulp.task('build-stylesheets', ['stylesheets'], function() {
  return gulp.src('static/stylesheets/**/*.css')
    .pipe(require('gulp-minify-css')({
      keepBreaks: true
    }))
    .pipe(gulp.dest('static/stylesheets'));
});

gulp.task('build', ['build-stylesheets']);

gulp.task('default', ['stylesheets'], function() {
  gulp.watch(['stylesheets/**', 'variables.json'], ['stylesheets']);
});

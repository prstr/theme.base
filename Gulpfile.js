"use strict";

var gulp = require('gulp')
  , Theme = require('prostore.theme-api');

var theme = new Theme(process.cwd());

gulp.task('stylesheets', function(cb) {
  theme.buildStylesheets(cb);
});

gulp.task('build', ['stylesheets']);

gulp.task('default', ['stylesheets'], function() {
  gulp.watch(['static/css/**', 'variables.json'], ['stylesheets']);
});

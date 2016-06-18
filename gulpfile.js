var gulp = require('gulp')
  , fs = require('fs')
  , jshint = require('gulp-jshint')
  , pkg = require('./package.json');

gulp.task('lint', function() {
  return gulp.src(['./src/*.js'])
    .pipe(jshint())
    .pipe(jshint.reporter('default'));
});

gulp.task('dist', ['lint'], function() {
  // place code for your default task here
});

// -- Default
gulp.task('default', ['dist']);

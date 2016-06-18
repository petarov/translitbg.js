var gulp = require('gulp')
  , fs = require('fs')
  , jshint = require('gulp-jshint')
  , uglifyjs = require('gulp-uglify')
  , header = require('gulp-header')
  , pkg = require('./package.json');

gulp.task('lint', function() {
  return gulp.src(['./src/*.js'])
    .pipe(jshint())
    .pipe(jshint.reporter('default'));
});

gulp.task('uglify', function() {
  return gulp.src('src/translitbg.js')
    .pipe(uglifyjs())
    .pipe(gulp.dest('./dist/'));
});

gulp.task('dist', ['lint', 'uglify'], function() {
  return gulp.src('./dist/translitbg.js')
    .pipe(header(fs.readFileSync('./src/header.txt', 'utf8'), { pkg : pkg } ))
    .pipe(gulp.dest('./dist/'));
});

// -- Default
gulp.task('default', ['dist']);

const { src, dest, pipe, series } = require('gulp')
  , fs = require('fs')
  , jshint = require('gulp-jshint')
  , uglifyjs = require('gulp-uglify')
  , mocha = require('gulp-mocha')
  , header = require('gulp-header')
  , pkg = require('./package.json');

function lint() {
  return src(['./src/*.js'])
    .pipe(jshint())
    .pipe(jshint.reporter('default'));
}

function uglify() {
  return src('src/translitbg.js')
    .pipe(uglifyjs())
    .pipe(dest('./build/'));
}

function dist() {
  return src('./build/translitbg.js')
    .pipe(header(fs.readFileSync('./src/header.txt', 'utf8'), { pkg } ))
    .pipe(dest('./build/'));
}

function test() {
  return src('test/*.js', {read: false})
    .pipe(mocha());
}

exports.lint = lint;
exports.test = series(lint, test);
exports.build = series(lint, test, uglify, dist);
exports.default = exports.build

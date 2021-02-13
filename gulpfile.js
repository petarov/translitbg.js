const { src, dest, pipe, series } = require('gulp')
  , fs = require('fs')
  , jshint = require('gulp-jshint')
  , jest = require('gulp-jest').default
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

function jestit() {
  return src('test').pipe(jest({
    "preprocessorIgnorePatterns": [
      "<rootDir>/dist/", "<rootDir>/node_modules/"
    ],
    "testMatch": [
      "**/test/**/*.js"
    ],
    "automock": false,
    "reporters": [
      "default",
      "jest-junit"
    ]
  }));
}

exports.lint = lint;
exports.test = series(lint, test);
exports.build = series(lint, test, jestit, uglify, dist);
exports.default = exports.build

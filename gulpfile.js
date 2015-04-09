var gulp = require('gulp');

var babel = require('gulp-babel');
var babelify = require('babelify');
var browserify = require('browserify');
var source = require('vinyl-source-stream');

var server = require('gulp-webserver');

// babelをただ試すだけならこっち
gulp.task('build', [], function() {
  console.log('build');

  gulp.src(['source/javascripts/*.js'])
    .pipe(babel())
    .pipe(gulp.dest('build/javascripts'));
});

// browserifyをしつつbabelするならこっち
gulp.task('browserify', function() {
  browserify({
    entries: './source/javascripts/main.js',
    cache: {},
    packageCache: {},
    fullPaths: false,
    debug: true
  })
  .transform(babelify.configure({
  }))
  .bundle()
  .pipe(source('main.js'))
  .pipe(gulp.dest('./build/javascripts'));
});

// gulp系のserverはlocalhostとして立ち上げるからかうまくheroku側で起動できない
gulp.task('server', ['browserify'], function() {
  console.log('server');

  gulp.src('build')
    .pipe(server({
      livereload: true,
      port: process.env.PORT || 4567, // localhost:4567
      open: true
    }));
});


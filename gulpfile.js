var gulp = require('gulp');
var babel = require('gulp-babel');
var server = require('gulp-webserver');

gulp.task('build', [], function() {
  console.log('build');

  gulp.src(['source/javascripts/*.js'])
    .pipe(babel())
    .pipe(gulp.dest('build/javascripts'));
});

// gulp系のserverはlocalhostとして立ち上げるからかうまくheroku側で起動できない
gulp.task('server', ['build'], function() {
  console.log('server');

  gulp.src('build')
    .pipe(server({
      livereload: true,
      port: process.env.PORT || 4567, // localhost:4567
      open: true
    }));
});


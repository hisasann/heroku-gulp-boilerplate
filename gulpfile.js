var gulp = require('gulp');
var babel = require('gulp-babel');
var server = require('gulp-webserver');

gulp.task('default', [], function() {
  console.log('defalut');
});

gulp.task('server', [], function() {
  console.log('server');

  gulp.src('build')
    .pipe(server({
      livereload: true,
      port: process.env.PORT || 4567, // localhost:4567
      open: true
    }));
});


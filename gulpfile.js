// *** dependencies *** //

const gulp = require('gulp');
const jshint = require('gulp-jshint');
const jscs = require('gulp-jscs');
const connect = require('gulp-connect');
const runSequence = require('run-sequence');


// *** tasks *** ///

gulp.task('connect', () => {
  connect.server({
    root: './',
    port: 8888,
    livereload: true
  });
});

gulp.task('html', () => {
  gulp.src('*.html')
    .pipe(connect.reload());
});

gulp.task('css', () => {
  gulp.src('./css/*.css')
    .pipe(connect.reload());
});

gulp.task('javascript', () => {
  gulp.src('./**/*.js')
    .pipe(connect.reload());
});

gulp.task('jshint',() => {
  return gulp.src('./**/*.js')
    .pipe(jshint({
      esnext: true
    }))
    .pipe(jshint.reporter('jshint-stylish'))
    .pipe(jshint.reporter('fail'));
});

gulp.task('style', () => {
  return gulp.src('/**/*.js')
    .pipe(jscs())
    .pipe(jscs.reporter())
    .pipe(jscs.reporter('fail'));
});

gulp.task('watch', () => {
  gulp.watch('./js/**/*.js', ['jshint', 'javascript', 'style']);
  gulp.watch(['*.html'], ['html']);
  gulp.watch(['./css/*.css'], ['css']);
});

// *** defailt task *** //
gulp.task('default', () => {
  runSequence(
    // ['jshint'],
    // ['style'],
    // ['watch'],
    ['connect']
  );
});

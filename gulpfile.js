var gulp   = require('gulp');
var concat = require('gulp-concat');

gulp.task('default', ['build']);

gulp.task('build', ['javascripts']);

gulp.task('javascripts', ['all.js', 'ie.js']);

gulp.task('all.js', function() {
  return gulp
    .src([
      'assets/javascripts/jquery.min.js',
      'assets/javascripts/jquery-migrate.min.js',
      'assets/javascripts/jquery.backstretch.min.js',
      'assets/javascripts/bootstrap.min.js',
      'assets/javascripts/app.js'])
    .pipe(concat('all.js'))
    .pipe(gulp.dest('intermediate/javascripts/'));
});

gulp.task('ie.js', function() {
  return gulp
    .src([
      'assets/javascripts/respond.js',
      'assets/javascripts/html5shiv.js',
      'assets/javascripts/placeholder-IE-fixes.js'])
    .pipe(concat('ie.js'))
    .pipe(gulp.dest('intermediate/javascripts/'));
});

var gulp   = require('gulp');
var concat = require('gulp-concat');

var javascripts = {
  "all.js": [
    'assets/javascripts/jquery.min.js',
    'assets/javascripts/jquery-migrate.min.js',
    'assets/javascripts/jquery.backstretch.min.js',
    'assets/javascripts/bootstrap.min.js',
    'assets/javascripts/app.js'
  ],
  "ie.js": [
    'assets/javascripts/respond.js',
    'assets/javascripts/html5shiv.js',
    'assets/javascripts/placeholder-IE-fixes.js'
  ]
};

gulp.task('default', ['build', 'watch']);

gulp.task('build', ['javascripts']);

gulp.task('javascripts', ['all.js', 'ie.js']);

gulp.task('all.js', function() {
  return gulp
    .src(javascripts['all.js'])
    .pipe(concat('all.js'))
    .pipe(gulp.dest('intermediate/javascripts/'));
});

gulp.task('ie.js', function() {
  return gulp
    .src(javascripts['ie.js'])
    .pipe(concat('ie.js'))
    .pipe(gulp.dest('intermediate/javascripts/'));
});

gulp.task('watch', function() {
  gulp.watch(javascripts['all.js'], ['all.js']);
  gulp.watch(javascripts['ie.js'],  ['ie.js']);
});

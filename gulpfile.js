var gulp = require('gulp'),
    sass = require('gulp-ruby-sass'),
    connect = require('gulp-connect'),
    jade = require('gulp-jade'),
    rename = require('gulp-rename'),
    browserify = require('browserify'),
    uglify = require('gulp-uglify'),
    source = require('vinyl-source-stream'),
    streamify = require('gulp-streamify'),
    ejs = require('node-underscorify'),
    prefix = require('gulp-autoprefixer');

gulp.task('js', function() {
  return browserify({
      entries: ['./dev/app.js']
    })
    .transform(ejs)
    .bundle({ debug: true })
    .on('error', function(err) {
      console.error(err.toString());
      this.emit('end');
    })
    .pipe(source('./bundle.js'))
    .pipe(gulp.dest("./public/js/"));
});

gulp.task('template', function() {
  ejs.transform({
    extensions: ['ejs', 'html']
  });
});


gulp.task('connect', function () {
  connect.server({
    port: 8080,
    livereload: true
  });
});

gulp.task('sass', function () {
    return gulp.src('./assets/sass/scaffolding.scss')
      .pipe(sass({
        style: 'compressed'
      }))
      .on('error', function (err) {
        console.log(err.message);
      })
      .pipe(gulp.dest('./public/css'))
      .pipe(connect.reload());
});

gulp.task('prefix', function() {
  return gulp.src('./public/css/scaffolding.css')
    .pipe(prefix({
            browsers: ['last 2 versions'],
            cascade: false
        }))
    .pipe(gulp.dest('./public/css'));
})

gulp.task('jade', function(){
  return gulp.src('./assets/tamplate/jade/index.jade')
    .pipe(jade())
    .on('error', function (err) {
        	console.log(err.message);
        })
    .pipe(gulp.dest('./public/'))
    .pipe(connect.reload());
});


gulp.task('w-layout', function() {
    gulp.watch('./assets/sass/scaffolding.scss', ['sass']);
    //gulp.watch('./assets/tamplate/jade/index.jade', ['jade']);
    gulp.watch('./assets/sass/**/*.scss', ['sass']);
    //gulp.watch('./assets/tamplate/jade/**/*.jade', ['jade']);
    gulp.watch('./public/css/scaffolding.css', ['prefix']);
});

gulp.task('w-app', function() {
  gulp.watch('./dev/app.js', ['js']);
  gulp.watch('./dev/**/*.js', ['js']);
  gulp.watch('./dev/view/template/*.html', ['js']);
});

gulp.task('app', ['w-app', 'template', 'js']);
gulp.task('layout', ['sass', 'prefix', 'w-layout', 'connect']);

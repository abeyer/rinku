var gulp = require('gulp');
var cssmin = require('gulp-cssmin');
var uglify = require('gulp-uglify');
var buffer = require('gulp-buffer');
var concat = require('gulp-concat');

gulp.task('js', function() {
    return gulp.src('src/rinku.js')
        .pipe(concat('rinku.min.js'))
        .pipe(buffer())
        .pipe(uglify())
        .pipe(gulp.dest('dist'));
});

gulp.task('css', function() {
    return gulp.src(['src/rinku.css', 'icons/icons.css'])
        .pipe(concat('rinku.min.css'))
        .pipe(cssmin())
        .pipe(gulp.dest('dist'));
});

gulp.task('default', ['js', 'css']);

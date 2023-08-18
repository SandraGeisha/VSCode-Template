var gulp = require('gulp');
var ts = require('gulp-typescript');
var sass = require('gulp-sass')(require('sass'));
 
gulp.task('compile', function () {
    return gulp.src('src/**/*.ts')
        .pipe(ts({
            noImplicitAny: true,
            outFile: 'main.js',
            target: 'ES6'
        }))
        .pipe(gulp.dest('dist'));
});

gulp.task('watch', function() {
  gulp.watch('src/**/*.ts',gulp.series('compile'));
  gulp.watch('src/**/*.scss', gulp.series('compile-sass'))
});

gulp.task("compile-sass", function(){
  return gulp.src('./src/main.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./dist',));
})

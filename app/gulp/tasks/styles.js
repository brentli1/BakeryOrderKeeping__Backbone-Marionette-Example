var gulp = require('gulp'),
    autoprefixer = require('gulp-autoprefixer'),
    manifest = require('../../assets/config/manifest.json'),
    sass    = require('gulp-ruby-sass');

gulp.task('styles', function () {
    return gulp.src(manifest.app.styles)
        .pipe(sass({ noCache : true, style: 'expanded' }))
        .pipe(autoprefixer({
            browsers: ['last 2 versions', 'Explorer >= 8'],
            cascade: false
        }))
        .pipe(gulp.dest('./assets/build/css'))
});

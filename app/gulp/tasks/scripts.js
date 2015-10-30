var gulp    = require('gulp'),
    manifest = require('../../assets/config/manifest.json'),
    concat  = require('gulp-concat'),
    plumber = require('gulp-plumber');

function concata(src, filename){
    return gulp.src(src)
        .pipe(concat(filename))
        .pipe(gulp.dest('./assets/build/js'));
}

gulp.task('scripts:vendor', function(){
    return concata(manifest.vendor.scripts, 'vendor.js');
});

gulp.task('scripts:app', function(){
    return concata(manifest.app.scripts, 'app.js');
});

gulp.task('scripts', ['scripts:vendor', 'scripts:app']);

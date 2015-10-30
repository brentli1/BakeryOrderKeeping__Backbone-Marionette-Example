var gulp    = require('gulp'),
    concat  = require('gulp-concat'),
    declare = require('gulp-declare'),
    manifest = require('../../assets/config/manifest.json'),
    handlebars = require('gulp-handlebars'),
    wrap    = require('gulp-wrap');

// Change the App name namespace here
var namespace = 'BakeryApp.templates';
// Create var for source
var src = manifest.app.templates;

gulp.task('templates', function () {
    return gulp.src(src)
        .pipe(handlebars({
          handlebars: require('handlebars')
        }))
        .pipe(wrap('Handlebars.template(<%= contents %>)'))
        .pipe(declare({
            namespace: namespace,
            noRedeclare: true, // Avoid duplicate declarations
            processName: function(filePath) {
                return declare.processNameByPath(filePath.replace(String(src).match(/\b[^\*]*/), ''));
            }
        }))
        .pipe(concat('templates.js'))
        .pipe(gulp.dest('./assets/build/templates'));
});

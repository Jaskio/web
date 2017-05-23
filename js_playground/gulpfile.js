var gulp = require('gulp');
var sass = require('gulp-sass');
var concat = require("gulp-concat");
var sourcemaps = require("gulp-sourcemaps");
var autoprefixer = require('gulp-autoprefixer');

var paths = {
    src: {
        scripts: {
            folder: './src/scripts/js/',
            files: './src/scripts/js/**/*.js'
        },
        styles: {
            sass: './src/styles/scss/*.scss',
            folder: './src/styles/',
            css_files: './src/styles/*.css',
            map_files: './src/styles/*.map'
        }
    },
    dist: {
        scripts: './src/scripts/',
        styles: './src/styles/'
    }
};

gulp.task('watch', function () {
    gulp.watch(paths.src.styles.sass, ['copy_css']);
    gulp.watch(paths.src.scripts.files, ['scripts']);
});

gulp.task('sass', function() {
    return gulp.src(paths.src.styles.sass)
        .pipe(sourcemaps.init())
        .pipe(sass.sync().on('error', sass.logError))
        .pipe(sourcemaps.write('./'))
        .pipe(gulp.dest(paths.src.styles.folder));
});

gulp.task('prefix', function() {
    gulp.src('./src/styles/main.css')
        .pipe(autoprefixer({
            browsers: ['IE 7', 'iOS 7', 'iOS 6', 'iOS 4', 'last 3 iOS versions', '> 5%'],
            cascade: false
        }))
        .pipe(gulp.dest('./src/styles'));
});

gulp.task('scripts', function() {
  return gulp.src(paths.src.scripts.files)
    .pipe(concat('main.js'))
    .pipe(gulp.dest(paths.dist.scripts))
});

gulp.task('copy_css', ['sass'], function() {
    gulp.src([paths.src.styles.css_files, paths.src.styles.map_files])
        .pipe(gulp.dest('./src/styles'));
})

gulp.task('build', ['copy_css', 'scripts']);

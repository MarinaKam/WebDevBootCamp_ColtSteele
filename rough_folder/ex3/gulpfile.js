'use strict';
const gulp          = require('gulp'),
    babel           = require('gulp-babel'),
    scss            = require('gulp-sass'),
    autoprefixer    = require('gulp-autoprefixer'),
    streamCombiner  = require('stream-combiner2'),
    concat          = require('gulp-concat'),
    _if             = require('gulp-if'),
    cleanCSS        = require('gulp-clean-css'),
    cssnano         = require('gulp-cssnano'),
    sourcemaps      = require('gulp-sourcemaps'),
    del             = require('del'),
    rev             = require('gulp-rev'),
    notify          = require('gulp-notify'),
    jshint          = require('gulp-jshint'),
    uglify          = require('gulp-uglify'),
    imagemin        = require('gulp-imagemin'),
    pngquant        = require('imagemin-pngquant'),
    browserSync     = require('browser-sync'),
    nodemon         = require('gulp-nodemon');

const filesize      = require('gulp-filesize'),
        changed     = require('gulp-changed');

const reload        = browserSync.reload;
const isDevelopment = !process.env.NODE_ENV || process.env.NODE_ENV === 'development';
const combine       = streamCombiner.obj;
const path   = {
    src: 'assets',
    dist: 'public'
};

const config = {
    proxy: "http://localhost:3000",
    files: "views/**/*.ejs",
    port: 7000,
    logPrefix: "Frontend_MarieKam"
};

gulp.task('clean', () => del([`${path.dist}/**/*.**`, 'manifest']));

gulp.task('styles', () => {
    combine(
        gulp.src(`${path.src}/**/main.scss`),
        changed(`${path.dist}/style/`),
        _if(isDevelopment, sourcemaps.init()),
        scss(),
        autoprefixer(['last 15 versions', '> 1%', 'safari 5', 'ie 8', 'ie 7'], {cascade: true}),
        cleanCSS(),
        _if(!isDevelopment, cssnano()),
        _if(!isDevelopment, rev()),
        concat('style.css'),
        _if(isDevelopment, sourcemaps.write()),
        gulp.dest(`${path.dist}/style/`),
        _if(!isDevelopment, rev.manifest('css.json')),
        _if(!isDevelopment, gulp.dest('manifest')),
        filesize()
        ).on('error', notify.onError(err => console.log(err.message)));
});

gulp.task('scripts', () => {
    combine(
        gulp.src(`${path.src}/js/*.js`),
        changed(`${path.dist}/js/`),
        babel({presets: ['es2015']}),
        jshint(),
        jshint.reporter('default'),
        _if(isDevelopment, sourcemaps.init()),
        uglify(),
        _if(isDevelopment, sourcemaps.write()),
        gulp.dest(`${path.dist}/script/`),
        reload({stream: true}),
        filesize()
    ).on('error', notify.onError(err => console.log(err.message)));
});

gulp.task('images', () => {
    combine(
        gulp.src(`${path.src}/img/*.{png,jpg,svg}`),
        changed(`${path.dist}/css/img/`),
        imagemin({
            optimizationLevel: 3,
            progressive: true,
            svgoPlugins: [{removeViewBox: false}],
            use: [pngquant()],
            interlaced: true
        }),
        gulp.dest(`${path.dist}/style/img/`),
        filesize(),
        _if(!isDevelopment, combine(rev.manifest('src.json'), gulp.dest('manifest'))),
        reload({stream: true})
    );
});

gulp.task('fonts', () => {
    gulp.src(`${path.src}/fonts/*.*`)
        .pipe(gulp.dest(`${path.dist}/css/fonts/`))
        .pipe(reload({stream: true}));
});

gulp.task('libs', () => {
    gulp.src(`${path.src}/lib/*.*`)
        .pipe(changed(`${path.dist}/lib/`))
        .pipe(gulp.dest(`${path.dist}/lib/`))
        .pipe(reload({stream: true}));
});

gulp.task('build', ['clean', 'styles', 'scripts', 'images', 'fonts', 'libs']);

gulp.task('watch', () => {
    gulp.watch(`${path.src}/**/*.scss`, ['styles']);
    gulp.watch(`${path.src}/**/*.js`, ['scripts']);
    gulp.watch(`${path.src}/img/*.{png,jpg,svg}`, ['images']);
    gulp.watch(`${path.src}/fonts/*.*`, ['fonts']);
    gulp.watch(`${path.src}/lib/*.*`, ['libs']);
    gulp.watch("views/**/*.ejs", () => reload());
});

gulp.task('nodemon', cb => {
    let started = false;
    return nodemon({
        script: 'app.js'
    }).on('start', () => {
        if (!started) {
            cb();
            started = true;
        }
    });
});

gulp.task('default', ['build', 'server', 'watch']);

gulp.task('server', ['nodemon'], () => browserSync.init(null, config));

gulp.task('dev', ['build', 'server', 'watch']);

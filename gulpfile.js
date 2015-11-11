var gulp = require('gulp');
var less = require('gulp-less');
var scss = require('gulp-scss');
var connect = require('gulp-connect');//实时刷新
var concat = require('gulp-concat');//连接
var uglify=require('gulp-uglify');//压缩
var rename=require('gulp-rename');//重命名
var minifycss =require('gulp-minify-css');
gulp.task('hello', function () {
    console.log('hello');
});
gulp.task('word', function () {
    console.log('word');
});
gulp.task('server', function () {
    connect.server({
        root: 'dist',//根目录
        port: 4000,
        livereload: true//实时刷新
    });
});
/**
 * copy file
 */
gulp.task('copyhtml', function () {
    return gulp.src('./app/index.html').pipe(gulp.dest('dist')).pipe(connect.reload());
});
gulp.task('copypng', function () {
    return gulp.src('./app/images/*.png').pipe(gulp.dest('dist/images'));
});
gulp.task('copypng1', function () {
    return gulp.src('./app/images/*.{png,jpg}').pipe(gulp.dest('dist/images'));
});
gulp.task('copypng2', function () {
    return gulp.src('./app/images/**').pipe(gulp.dest('dist/images'));
});
gulp.task('copypng2', function () {
    //return gulp.src(['./app/images*//**','!./app/js*//**','./app/css*//**']).pipe(gulp.dest('dist/images'));//---！是不要的意思
    return gulp.src(['./app/images/**', './app/js/**', './app/css/**']).pipe(gulp.dest('dist/images'));
});
/*
 gulp.task('default', function () {
 console.log('default');
 });*/
/***
 * 定义组合任务
 */
gulp.task('watch', function () {
    gulp.watch('./app/index.html', ['copyhtml']);
});

gulp.task('scss', function () {
    return gulp.src('app/css/*.sass').pipe(scss()).pipe(gulp.dest('dist/css'));
});
gulp.task('less', function () {
    return gulp.src('app/css/*.less').pipe(less()).pipe(gulp.dest('dist/css'));
});
gulp.task('concatjs1', function () {
    return gulp.src(['app/js/*.js']).pipe(concat('join.js')).pipe(gulp.dest('dist/js'));
});
gulp.task('concatjs', function () {
    return gulp.src(['app/js/*.js']).pipe(concat('join.js')).pipe(uglify()).pipe(rename('join.min.js')).pipe(gulp.dest('dist/js'));
});
gulp.task('less1', function () {
    return gulp.src('app/css/*.less').pipe(less()).pipe(minifycss()).pipe(rename('page.min.css')).pipe(gulp.dest('dist/css'));
});
gulp.task('default', ['server', 'less', 'scss', 'watch'], function () {
    console.log('done');
});

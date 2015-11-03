var gulp = require('gulp');
gulp.task('hello', function () {
    console.log('hello');
});
gulp.task('word', function () {
    console.log('word');
});
/**
 * copy file
 */
gulp.task('copyhtml', function () {
    return gulp.src('./app/index.html').pipe(gulp.dest('dist'));
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
    return gulp.src(['./app/images/**','./app/js/**','./app/css/**']).pipe(gulp.dest('dist/images'));
});
/*
 gulp.task('default', function () {
 console.log('default');
 });*/
/***
 * 定义组合任务
 */
gulp.task('watch',function(){
    gulp.watch('./app/index.html',['copyhtml']);
});

gulp.task('watch',function(){
    gulp.watch('./app/index.html',['copyhtml']);
});
gulp.task('default', ['watch'], function () {
    console.log('done');
});

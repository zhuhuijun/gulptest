var gulp = require('gulp');
gulp.task('hello', function () {
    console.log('hello');
});
gulp.task('word', function () {
    console.log('word');
});

/*
 gulp.task('default', function () {
 console.log('default');
 });*/
/***
 * 定义组合任务
 */
gulp.task('default', ['hello', 'word'], function () {
    console.log('done');
});

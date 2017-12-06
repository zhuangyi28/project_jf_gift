var gulp = require('gulp');

var browserSync = require('browser-sync').create("My Server");

//服务器,开发
var devServer = require('./gulp/dev/server.dev.js');

gulp.task('connect', devServer);


//更新所有less文件 开发
var devLess = require('./gulp/dev/less.dev.js');

gulp.task('changeLessDev', devLess);


//js合并，开发
var devJs = require('./gulp/dev/js.dev.js');

gulp.task('changeJsDev', devJs);


//ejs模板引擎 html 开发
var devEjs = require('./gulp/dev/ejs.dev.js');

gulp.task('fileIncludeDev', devEjs);


//图片压缩 开发
var devImg = require('./gulp/dev/img.dev.js');

gulp.task('imageMinDev', devImg);


//监听文件变化


gulp.task('devWatch', function () {

    //less文件修改 ，注入css
    gulp.watch('src/component/**/*.less', ['changeLessDev']);

    //html,js文件修改，重新拼接，刷新
    gulp.watch(['src/**/*.ejs', 'src/**/*.js'], ["fileIncludeDev",'changeJsDev']);

});


//开发环境
gulp.task('.myServer', ['imageMinDev', 'changeLessDev', 'changeJsDev', 'fileIncludeDev', 'devWatch', 'connect']);


//js压缩 交付
var distJs = require('./gulp/dist/js.dist.js');

gulp.task('distJs', distJs);


//css压缩 交付
var distCss = require('./gulp/dist/css.dist.js');

gulp.task('distCss', distCss);


//图片移动
var distImg = require('./gulp/dist/img.dist.js');

gulp.task('distImg', distImg);

//清除
var distClean = require('./gulp/dist/clean.dist');

gulp.task('distClean', distClean);

//html
var distHtml = require('./gulp/dist/html.dist.js');

gulp.task('distHtml', distHtml);

gulp.task('.dist', ['imageMinDev', 'changeLessDev', 'changeJsDev', 'fileIncludeDev','distClean'],function () {

    gulp.start('distJs', 'distCss', 'distImg', 'distHtml')

});


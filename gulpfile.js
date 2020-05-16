(function() {
    'use strict';
    var gulp = require('gulp'),
        less = require('gulp-less'),
        rename = require('gulp-rename'),
        minifycss = require('gulp-minify-css'),
        autoprefixer = require('gulp-autoprefixer'),
        uglify = require('gulp-uglify'),
        jshint = require('gulp-jshint'),
        stylish = require('jshint-stylish'),
        htmlclean = require('gulp-htmlclean'),
        rev = require('gulp-rev-append'),
        sequence = require('gulp-sequence'),
        paths = {
            root: './',
            source: './themes/hexo-theme-snippet/source/' //主题下原文件
        }

    function handleError(error) {
        gutil.log(error.message);
        process.exit(1);
    }

    /*====================================================
         开发主题
    ====================================================*/

    // CSS预处理
    gulp.task('less-task', function() {
        return gulp.src(paths.source + 'css/less/_style.less')
            .pipe(less())
            .pipe(rename({ basename: "style" }))
            .pipe(gulp.dest(paths.source + 'css'))
            .on('error', handleError);
    });

    // 校验JS语法和风格
    gulp.task('js-task', function() {
        return gulp.src(paths.source + 'js/*.js')
            .pipe(jshint())
            .pipe(jshint.reporter(stylish))
            .pipe(gulp.dest(paths.source + 'js/'))
            .on('error', handleError);
    });

    // 监听任务-主题开发模式
    gulp.task('dev', function() {
        gulp.watch(paths.source + 'css/less/*.less', ['less-task']);
        gulp.watch(paths.source + 'js/*.js', ['js-task']);
    });


    /*====================================================
        部署前代码处理
    ====================================================*/

    // 压缩处理 css
    gulp.task('minify-css', function() {
        return gulp.src('./public/**/*.css')
            .pipe(autoprefixer({
                cascade: true, //是否美化格式
                remove: false //是否删除不必要的前缀
            }))
            .pipe(minifycss())
            .pipe(gulp.dest('./public'))
            .on('error', handleError);
    });

    // 压缩处理 js
    gulp.task('minify-js', function() {
        return gulp.src('./public/js/*.js')
            .pipe(uglify())
            .pipe(gulp.dest('./public/js'))
            .on('error', handleError);
    });

    // 压缩处理 html
    gulp.task('minify-html', function() {
        return gulp.src('./public/**/*.html')
            .pipe(htmlclean())
            .pipe(gulp.dest('./public'))
            .on('error', handleError);;
    });

    // 添加版本号
    gulp.task('rev', function() {
        return gulp.src('./public/**/*.html')
            .pipe(rev().on('error', console.log))
            .pipe(gulp.dest('./public'))
            .on('error', handleError);
    });

    // 同步执行task
    gulp.task('build', sequence(['less-task']));
    gulp.task('bundle', sequence(['minify-css', 'minify-js', 'minify-html'], 'rev'));

    // 部署前代码处理
    gulp.task('default', ['deploy'], function(e) {
        console.log("[complete] please execute： hexo d");
    })
})();

var gulp = require('gulp'),
	concat = require('gulp-concat'),
	uglify = require('gulp-uglify'),
	jshint = require('gulp-jshint'),
	autoprefixer = require('gulp-autoprefixer'),
	sass = require('gulp-sass');
	php2html = require("gulp-php2html");

'use strict';

gulp.task('js__compile', function(){
	return gulp.src('js/*.js')
	.pipe(concat('functions.js'))
	//.pipe(uglify())
	.pipe(gulp.dest('dist/js/'))
});

gulp.task('sass__compile', function(){
	return gulp.src('sass/*.scss')
	.pipe(sass().on('error', sass.logError))
	.pipe(autoprefixer({
		browsers: ['last 2 versions']
	}))
	.pipe(concat('global.css'))
	.pipe(gulp.dest('dist/css/'))
});

gulp.task('watch', function(){
	gulp.watch('sass/*.scss',[ 'sass__compile' ]);
	gulp.watch('js/*.js',[ 'js__compile' ]);
});

gulp.task('compile', ['sass__compile', 'js__compile','watch'])

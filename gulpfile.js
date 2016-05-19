var gulp = require('gulp'),
	concat = require('gulp-concat'),
	uglify = require('gulp-uglify'),
	jshint = require('gulp-jshint'),
	autoprefixer = require('gulp-autoprefixer'),
	sass = require('gulp-sass');
	php2html = require("gulp-php2html");

'use strict';

gulp.task('js__compile', function(){
	return gulp.src('components/**/functions.js')
	.pipe(concat('global.functions.js'))
	//.pipe(uglify())
	.pipe(gulp.dest('assets/js/'))
});

gulp.task('sass__compile', function(){
	return gulp.src('components/**/styles.scss')
	.pipe(sass().on('error', sass.logError))
	.pipe(autoprefixer({
		browsers: ['last 2 versions']
	}))
	.pipe(concat('global.styles.css'))
	.pipe(gulp.dest('assets/css/'))
});

gulp.task('sass__global__compile',function(){
	return gulp.src('sass/global.scss')
	.pipe(sass().on('error', sass.logError))
	.pipe(autoprefixer({
		browsers: ['last 2 versions']
	}))
	.pipe(concat('global.styles.css'))
	.pipe(gulp.dest('assets/css/'))
});

gulp.task('watch', function(){
	gulp.watch('components/**/styles.scss',[ 'sass__compile' ]);
	gulp.watch('components/**/functions.js',[ 'js__compile' ]);
	gulp.watch('sass/global.scss',[ 'sass__global__compile' ])
});

gulp.task('compile', ['sass__compile', 'js__compile', 'watch'])

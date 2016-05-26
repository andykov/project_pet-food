var gulp = require('gulp'),
	sass = require('gulp-sass'),
	prefixer = require('gulp-autoprefixer'),
	csso = require('gulp-csso'),
	rename = require('gulp-rename'),
	imagemin = require('gulp-imagemin'),
	pngquant = require('imagemin-pngquant'),
	spritesmith = require('gulp.spritesmith'),
	browserSync = require("browser-sync").create(),
	reload = browserSync.reload;

var path = {
	// Сборка
	build: { 
		html: 'build/html/',
		js: 'build/js/',
		css: 'build/css/',
		img: 'build/img/',
		spriteImgPath: 'build/img/sprite/',
		spriteImgName: '../img/sprite/sprite.png',
		js: 'build/js/',
		fonts: 'build/fonts/'
	},
	// Исходники
	src: { 
		html: 'src/html/*.html',
		scripts: 'src/scripts/**/*.js',
		style: 'src/scss/**/*.+(scss|css)',
		images: ['src/images/**/*', '!src/images/sprite/*.*'],
		spriteOrigin: 'src/images/sprite/*.+(jpg|jpeg|gif|png)',
		spriteSass: 'src/style/utils/',
		js: 'src/js/**/*',
		fonts: 'src/fonts/**/*.*'
	},
	// Слежка
	watch: {
		html: 'src/html/**/*.html',
		scripts: 'src/scripts/**/*.js',
		style: 'src/scss/**/*.+(scss|css)',
		images: 'src/images/**/*',
		sprite: 'src/images/sprite/*.*',
		js: 'src/js/**/*.*',
		fonts: 'src/fonts/**/*.*'
	},
	clean: './build/img/*'
};

// Вебсервер
gulp.task('webserver', function () {
	browserSync.init({
        server: {
			baseDir: "build"
		},
		host: 'localhost',
		port: 9000,
		logPrefix: "gulp_frontend",
		// tunnel: true,
		ui: {
		    port: 9001
		}
    });
    browserSync.notify("Compiling, please wait!");
});

// Сборка HTML
gulp.task('html', function () {
	gulp.src(path.src.html)
		.pipe(gulp.dest(path.build.html))
		.pipe(reload({stream:true}));
});

// Сборка CSS
gulp.task('style', function () {
	return gulp.src(path.src.style)
		.pipe(sass())
		.pipe(prefixer({browsers: ['last 4 versions', 'ie 8']}))
		.pipe(csso())
		.pipe(rename({suffix: ".min"}))
		.pipe(gulp.dest(path.build.css))
		.pipe(reload({stream:true}));
});

// Сжатие изображений
gulp.task('images', function () {
	gulp.src(path.src.images)
		.pipe(imagemin({
			progressive: true,
			svgoPlugins: [{removeViewBox: false}],
			use: [pngquant()],
			interlaced: true
		}))
		.pipe(gulp.dest(path.build.img))
		.pipe(reload({stream:true}));
});

// Генерация спрайта
gulp.task('sprite', function() {
	var spriteData = 
		gulp.src(path.src.spriteOrigin)
			.pipe(spritesmith({
				imgName: path.build.spriteImgName,
				cssName: '_sprite-data.scss',
				cssFormat: 'scss',
				algorithm: 'binary-tree',
				cssTemplate: 'sass.template.mustache',
				cssVarMap: function(sprite) {
					sprite.name = 's-' + sprite.name
				}
			}));

	spriteData.img.pipe(gulp.dest(path.build.spriteImgPath));
	spriteData.css.pipe(gulp.dest(path.src.spriteSass));
});

// Копируем шрифты в папку build
gulp.task('fonts', function() {
	gulp.src(path.src.fonts)
		.pipe(gulp.dest(path.build.fonts))
});

// Копируем скрипты в папку build
gulp.task('js', function() {
	gulp.src(path.src.js)
		.pipe(gulp.dest(path.build.js))
		.pipe(reload({stream:true}));
});

gulp.task('build', [
	'html',
	'style',
	// 'js:build',
	'images',
	'sprite',
	'js',
	'fonts'
]);

gulp.task('watch', function() {
	gulp.watch(path.watch.html, ['html'])
	gulp.watch(path.watch.style, ['style'])
	// gulp.watch(path.watch.scripts, ['js:build'])
	gulp.watch(path.watch.images, ['images'])
	gulp.watch(path.watch.images, ['sprite'])
	gulp.watch(path.watch.js, ['js'])
	gulp.watch(path.watch.fonts, ['fonts'])
	// watch([path.watch.images], function(event, cb) {
	// 	gulp.start('images:build');
	// });
});

gulp.task('default', ['build', 'webserver', 'watch']);
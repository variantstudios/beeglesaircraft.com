var gulp = require('gulp');
var sass = require('gulp-sass');
var uglify = require('gulp-uglify');
var autoprefixer = require('gulp-autoprefixer');
var sourcemaps = require('gulp-sourcemaps');
var npmDist = require('gulp-npm-dist');
var rename = require('gulp-rename');
var size = require('gulp-filesize');
var plumber = require('gulp-plumber');
var svgo = require('gulp-svgo');
var child = require('child_process');
var log = require('fancy-log');
var browserSync = require('browser-sync').create();

// Variables
var autoprefixerOptions = {
  browsers: [ 'last 4 versions', '> 5%', 'Firefox ESR' ]
};
var sassOptions = {
  errLogToConsole: true,
  outputStyle: 'expanded'
};

var style_input = './assets/sass/**/*.scss';
var style_output = './assets/css';
var js_input = './assets/js/dev/**/*.js';
var js_output = './assets/js/prod';
var svg_input = './assets/images/**/*.svg';
var svg_output = './assets/images';

gulp.task('build', [ 'sass', 'js', 'jekyll' ]);

// Wait for jekyll-build, then launch the Server
gulp.task('browser-sync', [ 'build' ], function() {
  browserSync.init({
    server: {
      baseDir: '_site'
    }
  });
});

/**
 * Watch scss files for changes & recompile
 * Watch html/md files, run jekyll & reload BrowserSync
 */
gulp.task('watch', function() {
  gulp.watch('assets/sass/**', [ 'sass' ]);
  gulp.watch('assets/js/dev/**', [ 'js' ]);
  gulp.watch(
    [
      '**.md',
      '**.html',
      '_layouts/**',
      '_includes/**',
      '_data/**',
      'pages/**',
      'assets/images/**',
      'posts/**',
      '_basic-pages/**.md'
    ],
    [ 'jekyll' ]
  );
  gulp.watch('_site/**', [ 'reload' ]);
});
gulp.task('reload', function() {
  browserSync.reload();
});

gulp.task('js', function() {
  return gulp
    .src(js_input)
    .pipe(plumber())
    .pipe(sourcemaps.init())
    .pipe(uglify())
    .pipe(sourcemaps.write())
    .pipe(plumber.stop())
    .pipe(size())
    .pipe(gulp.dest(js_output))
    .pipe(browserSync.stream());
});

gulp.task('sass', function() {
  return gulp
    .src(style_input)
    .pipe(plumber())
    .pipe(sourcemaps.init())
    .pipe(sass(sassOptions))
    .pipe(sourcemaps.write())
    .pipe(autoprefixer(autoprefixerOptions))
    .pipe(plumber.stop())
    .pipe(size())
    .pipe(gulp.dest(style_output))
    .pipe(browserSync.stream());
});

gulp.task('jekyll', () => {
  const jekyll = child.spawn('jekyll', [ 'build', '--watch', '--incremental', '--drafts' ]);
  ('copy:libs');
  const jekyllLogger = (buffer) => {
    buffer.toString().split(/\n/).forEach((message) => log('Jekyll: ' + message));
  };

  jekyll.stdout.on('data', jekyllLogger);
  jekyll.stderr.on('data', jekyllLogger);
});

gulp.task('copy:libs', function() {
  gulp
    .src(npmDist(), { base: './node_modules/' })
    .pipe(
      rename(function(path) {
        path.dirname = path.dirname.replace(/\/dist/, '').replace(/\\dist/, '');
      })
    )
    .pipe(gulp.dest('./assets/js/libs'));
});

gulp.task('svg', () => {
  return gulp.src(svg_input).pipe(svgo()).pipe(gulp.dest(svg_output));
});

gulp.task('prod', [ 'svg' ], function() {
  return gulp
    .src(style_input)
    .pipe(sass({ outputStyle: 'compressed' }))
    .pipe(autoprefixer(autoprefixerOptions))
    .pipe(size())
    .pipe(gulp.dest(style_output));
});

gulp.task('default', [ 'browser-sync', 'watch', 'copy:libs' ]);

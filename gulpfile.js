const gulp = require('gulp')
const nodemon = require('gulp-nodemon')
const less = require('gulp-less')

var l = console.log

gulp.task('less', () => {
	l('start less changing')
	return gulp.src('client/*.less')
				.pipe(less())
				.pipe(gulp.dest('public/'))
})

gulp.task('server', function(){
	var stream = nodemon({
		script: 'server/server.js',
		ext : 'html js less',
		tasks : ['less']
	})

	stream
		.on('restart', function(){
			l('restarted')
		})
		.on('crash', function(){
			l('crashed')
		})
})


gulp.task('default', ['server', 'less'])
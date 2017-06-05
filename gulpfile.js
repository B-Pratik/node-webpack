const gulp = require('gulp');
const del = require('del');
const runSequence = require('run-sequence');
const webpackConfig = require('./webpack-config.js');
const pm2 = require('pm2');
const compiler = require('webpack')(webpackConfig);

gulp.task('build', function (cb) {
    compiler.run(function (err) {
        if (err) {
            console.error(err.message);
        }
        cb();
    });
});

gulp.task('clean', function () {
    return del.sync(['./lib/**', '!./lib']);
});

gulp.task('complete', function (cb) {
    return runSequence(
        'clean',
        'build',
        cb
    );
});

gulp.task('default', ['complete'], function () {
    pm2.connect(function (err) {
        if (err) {
            console.error(err);
            process.exit(2);
        }

        pm2.start({
            name: 'Node-Setup',
            script: 'lib/index.js',
            exec_mode: 'cluster',
            instances: 0,
            max_memory_restart: '500M',
            kill_timeout: '5000',
            mergeLogs: true,
            output: 'logs/output.log',
            error: 'logs/error.log'
        }, function (err, apps) {
            pm2.disconnect();
            if (err) throw err
        });
    });
});
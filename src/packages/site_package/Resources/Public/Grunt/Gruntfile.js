module.exports = function(grunt) {

const sass = require('node-sass');


    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        sass: {                              // Task
            dist: {
                options:{
                    implementation: sass,
                    //style:'compressed',
                    sourceMap: true
                },
                files: {
                    '../Css/dest/app.css': '../Css/src/*.scss'
                }
            }
        },
        uglify: {
            options: {
                mangle: {
                    reserved: 'jQuery',
                }
            },
            my_target: {
                files: {
                    '../JavaScript/dest/app.min.js': '../JavaScript/src/app.js',
                }
            }
        },
        watch: {
            sass: {
                files: ['../Css/src/*.scss','../Css/src/*/*.scss','../JavaScript/src/*.js','../../Private/Partials/Page/*/*.html'],
                tasks: ['sass', 'uglify'],
            }
        },
        browserSync: {
            dev: {
                bsFiles: {
                    src : [
                        '../Css/dest/*.css',
                        '../../Private/Partials/Page/*/*.html'
                    ]
                },
                options: {
                    watchTask: true,
                    proxy: 'post.localhost',
                }
            }
        }
    });

    // Load the plugin that provides the "uglify" task.
    grunt.loadNpmTasks('grunt-sass');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-browser-sync');

    // Default task(s).
    grunt.registerTask('default', ['browserSync', 'watch']);
};

const sass = require('sass'); // Dart Sass wird hier anstelle von Node Sass verwendet
const connectLivereload = require('connect-livereload');
const autoprefixer = require('autoprefixer');

module.exports = function(grunt) {
    /**
     * Project configuration.
     */
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        paths: {
            root: '../',
            resources: '<%= paths.root %>Resources/',
            sass: '<%= paths.resources %>Public/Scss/',
            css: '<%= paths.resources %>Public/Css/',
            fonts: '<%= paths.resources %>Public/Fonts/',
            img: '<%= paths.resources %>Public/Images/',
            js: '<%= paths.resources %>Public/JavaScript/'
        },
        banner: '/*!\n' +
            ' * site package v<%= pkg.version %> (<%= pkg.homepage %>)\n' +
            ' * Copyright 2024-<%= grunt.template.today("yyyy") %> <%= pkg.author %>\n' +
            ' * Licensed under the <%= pkg.license %> license\n' +
            ' */\n',
        uglify: {
            all: {
                options: {
                    banner: '<%= banner %>',
                    mangle: true,
                    compress: true,
                    beautify: false
                },
                files: {
                    "<%= paths.js %>/Dist/scripts.js": [
                        "<%= paths.js %>Src/main.js"
                    ]
                }
            }
        },
        sass: {
            options: {
                implementation: sass, // Dart Sass implementation
                outputStyle: 'expanded',
                precision: 8,
                sourceMap: false
            },
            layout: {
                files: {
                    '<%= paths.css %>layout.css': '<%= paths.sass %>layout.scss'
                }
            }
        },
        postcss: {
            options: {
                map: false,
                processors: [
                    autoprefixer() // Korrigiere dies, um sicherzustellen, dass Autoprefixer korrekt verwendet wird
                ]
            },
            layout: {
                src: '<%= paths.css %>layout.css'
            }
        },
        cssmin: {
            options: {
                keepSpecialComments: '*',
                advanced: false
            },
            layout: {
                src: '<%= paths.css %>layout.css',
                dest: '<%= paths.css %>layout.min.css'
            }
        },
        imagemin: {
            extension: {
                files: [{
                    expand: true,
                    cwd: '<%= paths.resources %>',
                    src: [
                        '**/*.{png,jpg,gif}'
                    ],
                    dest: '<%= paths.resources %>'
                }]
            }
        },
        watch: {
            options: {
                livereload: 35729 // Ensure this is the correct LiveReload port
            },
            sass: {
                files: '<%= paths.sass %>**/*.scss',
                tasks: ['css']
            },
            javascript: {
                files: '<%= paths.js %>Src/**/*.js',
                tasks: ['js']
            },
            livereload: {
                options: {
                    livereload: true // This is the right option to enable livereload for file changes
                },
                files: [
                    '<%= paths.css %>/**/*.css',
                    '<%= paths.js %>/**/*.js',
                    '<%= paths.img %>/**/*.{png,jpg,gif,svg}',
                    '../**/*.html'  // Ensure this matches your project file structure
                ]
            }
        },
        connect: {
            server: {
                options: {
                    livereload: true,
                    open: true,
                    hostname: 'localhost',
                    port: 9000,
                    base: '../',  // Make sure this is the correct base path for your project
                    middleware: function(connect, options, middlewares) {
                        middlewares.unshift(connectLivereload());  // This is important for injecting the LiveReload script
                        return middlewares;
                    }
                }
            }
        }
    });

    /**
     * Register tasks
     */
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-imagemin');
    grunt.loadNpmTasks('grunt-postcss');
    grunt.loadNpmTasks('grunt-sass');
    grunt.loadNpmTasks('grunt-contrib-connect');

    /**
     * Grunt update task
     */
    grunt.registerTask('css', ['sass', 'postcss', 'cssmin']);
    grunt.registerTask('js', ['uglify']);
    grunt.registerTask('build', ['js', 'css', 'imagemin']);
    grunt.registerTask('serve', ['build', 'connect:server', 'watch']);
    grunt.registerTask('default', ['build']);
};

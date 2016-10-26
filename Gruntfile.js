
module.exports = function(grunt) {

    grunt.initConfig({
        phpcs: {
            application: {
                src: ['index.php', 'src/**/*.php']
            },
            options: {
                bin: 'phpcs',
                standard: 'PSR2'
            }
        },
        watch: {
            scripts: {
                files: ['index.php', 'src/**/*.php'],
                tasks: ['phpcs']
            },
            sass: {
                files: ['assets/scss/**/*.scss'],
                tasks: ['css']
            },
            scripts: {
                files: ['assets/js/**/*.js'],
                tasks: ['js']
            }
        },
        sass: {
            options: {
                sourceMap: true,
                includePaths: ['bower_components/foundation-sites/scss/']
            },
            dist: {
                files: {
                    'css/app.css': 'assets/scss/app.scss'
                }
            }
        },
        concat: {
            dist: {
                src: [
                    'bower_components/jquery/dist/jquery.min.js',
                    'bower_components/foundation-sites/dist/foundation.js',
                    'assets/js/*.js'
                ],
                dest: 'js/app.js',
            },
        },
        uglify: {
            my_target: {
                options: {
                    sourceMap: true
                },
                files: {
                    'js/app.min.js': ['js/app.js']
                }
            }
        },
        cssmin: {
            options: {
                sourceMap: true
            },
            target: {
                files: {
                    'css/app.css.min': ['css/app.css']
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-phpcs');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-sass');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-cssmin');

    grunt.registerTask('css', ['sass', 'cssmin']);
    grunt.registerTask('js', ['concat', 'uglify']);
    grunt.registerTask('php', ['phpcs']);
    grunt.registerTask('assets', ['css', 'js']);
    grunt.registerTask('default', ['watch']);
};

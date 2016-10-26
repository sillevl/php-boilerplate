
module.exports = function(grunt) {

    grunt.initConfig({
        phpcs: {
            application: {
                src: ['index.php', 'lib/**/*.php']
            },
            options: {
                bin: 'phpcs',
                standard: 'PSR2'
            }
        },
        watch: {
            scripts: {
                files: ['index.php', 'lib/**/*.php'],
                tasks: ['phpcs']
            },
            sass: {
                files: ['src/scss/**/*.scss'],
                tasks: ['sass']
            },
            scripts: {
                files: ['src/scss/**/*.js'],
                tasks: ['concat']
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
        }
    });

    grunt.loadNpmTasks('grunt-phpcs');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-sass');
    grunt.loadNpmTasks('grunt-contrib-concat');

    grunt.registerTask('default', ['sass', 'concat']);
};

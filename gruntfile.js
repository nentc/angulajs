module.exports = function(grunt) {
    require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);
    grunt.initConfig({
        connect: {
            all: {
                options: {
                    port: 9000,
                    base: '',
                    hostname: "localhost",
                    keepalive:false,
                    middleware: function(connect, options) {
                        return [
                            require('grunt-contrib-livereload/lib/utils').livereloadSnippet,
                            connect.static(options.base)
                        ];
                    }
                }
            }
        },
        open: {
            all: {
                path: 'http://localhost:<%= connect.all.options.port%>'
            }
        },
        regarde: {
            all: {
                files: ['index.html', 'css/main.css', 'app/*.js', 'app/*/*.js','app/**/*.html'],
                tasks: ['livereload']
            }
        }
    });
    grunt.registerTask('serve', [
        'livereload-start',
        'connect',
        'open',
        'regarde'
    ]);
};

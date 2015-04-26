module.exports = function(grunt) {
    require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);
    grunt.initConfig({
        connect: {
            all: {
                options: {
                    port: 9000,
                    base: '',
                    hostname: "0.0.0.0",
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
                files: ['*/**.html', 'css/*.css', 'js/*.js'],
                tasks: ['livereload']
            }
        },
        concat: {
            generated: {
                files: [{
                    dest: 'dist/app.js',
                    src: [
                        '**/*.js',
                    ]
                }]
            }
        },
    });
    grunt.registerTask('serve', [
        'livereload-start',
        'connect',
        'open',
        'regarde'
    ]);
};

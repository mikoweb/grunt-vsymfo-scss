module.exports = function (output) {
    "use strict";
    return function (grunt) {
        var options = JSON.parse(grunt.option('options') || '{}'),
            files = {}, loadPath = [];

        if (options.loadPath) {
            if (!Array.isArray(options.loadPath)) {
                throw new Error('loadPath option is not array');
            }

            loadPath = options.loadPath;
        }

        if (!options.src) {
            throw new Error('No src option!');
        }

        files[output] = [options.src];

        grunt.initConfig({
            pkg: grunt.file.readJSON("package.json"),
            sass: {
                vSymfoScss: {
                    files: files,
                    loadPath: loadPath,
                    options: {
                        style: 'compressed',
                        sourcemap: 'none',
                        update: true
                    }
                }
            }
        });

        grunt.loadNpmTasks('grunt-contrib-sass');
        grunt.registerTask('vsymfo-scss', [
            'sass:vSymfoScss'
        ]);
    };
};

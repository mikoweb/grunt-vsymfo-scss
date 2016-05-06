module.exports = function (grunt) {
    "use strict";
    var options = JSON.parse(grunt.option('options') || '{}'),
        files = {}, loadPath = [];

    if (!options.src) {
        throw new Error('No src option!');
    }

    if (!options.output) {
        throw new Error('No output option!');
    }

    if (options.loadPath) {
        if (!Array.isArray(options.loadPath)) {
            throw new Error('loadPath option is not array');
        }

        loadPath = options.loadPath;
    }

    files[options.output] = [options.src];

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

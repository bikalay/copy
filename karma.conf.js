module.exports = function(config) {
    config.set({
        frameworks: ['mocha', 'browserify'],
        files: [
            'test/**/*.js'
        ],
        reporters: ['progress', 'coverage'],
        preprocessors: {
            'test/**/*.js': ['coverage', 'browserify']
        },
        browsers : ['Chrome', 'Firefox', 'Safari', 'IE'],
        browserify: {
            debug: true
        },
        coverageReporter: {
            type : 'html',
            dir : 'coverage/'
        }
    });
};
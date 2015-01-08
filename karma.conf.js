/**
 * Karma configuration.
 *
 * @author Rubens Mariuzzo
 */
'use strict';

/**
 * Configure Karma test runner.
 * @param  {object} config Karma configuration object.
 */
module.exports = function (config) {
  config.set({
    reporters: ['progress'],
    browsers: ['PhantomJS'],
    frameworks: ['jasmine', 'chai'],
    files: [
      'spec/**/*.js'
    ]
  });
};

/*
 * grunt-json-generator
 * https://github.com/Xumeiquer/grunt-json-generator
 *
 * Copyright (c) 2013 Jaume Martin
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {

	// Please see the Grunt documentation for more information regarding task
	// creation: http://gruntjs.com/creating-tasks

	grunt.registerMultiTask('json_generator', 'Generate JSON files', function() {
		// Merge task-specific and/or target-specific options with these defaults.
		var dest, prop, obj;
		if (this.data.dest){
			dest = grunt.config.process(this.data.dest);
		} else {
			grunt.fail.warn('Destination file is missing.', 3);
		}

		var processedObj=grunt.config.process(this.data.options);

		try {
			obj = JSON.parse(JSON.stringify(processedObj));
		} catch (e){
			grunt.log.error(e);
			grunt.fail.warn("Error parsing json the data.", 3);
		}
		grunt.file.write(dest, JSON.stringify(obj, null, 4));
	});

};

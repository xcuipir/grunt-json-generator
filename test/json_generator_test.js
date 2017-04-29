'use strict';

var grunt = require('grunt');

/*
  ======== A Handy Little Nodeunit Reference ========
  https://github.com/caolan/nodeunit

  Test methods:
    test.expect(numAssertions)
    test.done()
  Test assertions:
    test.ok(value, [message])
    test.equal(actual, expected, [message])
    test.notEqual(actual, expected, [message])
    test.deepEqual(actual, expected, [message])
    test.notDeepEqual(actual, expected, [message])
    test.strictEqual(actual, expected, [message])
    test.notStrictEqual(actual, expected, [message])
    test.throws(block, [error], [message])
    test.doesNotThrow(block, [error], [message])
    test.ifError(value)
*/

exports.json_generator = {
  setUp: function(done) {
    // setup here if necessary
    done();
  },
  target: function(test) {
    test.expect(3);
    var filename = "testsTmp/myConfigFile.json";
    test.equal(grunt.file.isFile(filename), true, "File created");
    var file = grunt.file.read(filename);
    test.equal(typeof JSON.parse(file), typeof {}, "The file created is a valid JSON");
    test.equal(JSON.parse(file)['message'], 'This is a test', "Recursive template expansion");
    test.done();
  }
};

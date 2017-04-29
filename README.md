# xcuipir/grunt-json-generator

> Write your json files easily.

This is a plugin for [_Grunt: The JavaScript Task Runner_](https://gruntjs.com/). It is a fork of the project at https://github.com/Xumeiquer/grunt-json-generator which has not been updated for some time and lacks [Grunt templating](https://gruntjs.com/configuring-tasks#templates) support.

## Getting Started
This plugin requires Grunt `>=0.4.1`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install xcuipir/grunt-json-generator#0.2.0 --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-json-generator');
```

## The "json_generator" task

### Overview
In your project's Gruntfile, add a section named `json_generator` to the data object passed into `grunt.initConfig()`.

```js
grunt.initConfig({
  json_generator: {
    your_target: {
      dest: "", // Destination file
      options: {
        // Your json file goes here
        // You can use the Grunt templating system too
      }
    }
  }
});
```

### Options
There are no options themselves. The options are just your json file, that's all.

### Usage Examples

#### Simple

```js
grunt.initConfig({
  json_generator: {
    target: {
      dest: "bower.json",
      options: {
        name: "json-generator",
        version: "0.1.0",
        description: "Generating json files on the fly really easily.",
        keywords: ["json", "grunt"]
      }
    }
  }
});
```

#### Using templates

This will produce exactly the same result as the simple example shown above but note that the string `json` is dynamically inserted using [Grunt's templating system](https://gruntjs.com/configuring-tasks#templates).

```js
grunt.initConfig({
  what: "json",

  json_generator: {
    target: {
      dest: "bower.json",
      options: {
        name: "<%= what %>-generator",
        version: "0.1.0",
        description: "Generating <%= what %> files on the fly really easily.",
        keywords: ["<%= what %>", "grunt"]
      }
    }
  }
});
```

## Contributing
If you have any suggestions, find bugs or want to propose additional features, feel free to post a issue on the issue tracker.
Help in form of forks & PRs is appreciated. :simple_smile: In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [Grunt](http://gruntjs.com/).

## Release History
### Version 0.1.0 _(released on 05-08-2013)_

- Initial release

### Version 0.2.0 _(released on 29-04-2017)_

**Note**: First version as a fork (`xcuipir/grunt-json-generator`)

- Update for Grunt 1.0.1
- Add Grunt templating support

'use strict';
var util = require('util');
var path = require('path');
var yeoman = require('yeoman-generator');
var yosay = require('yosay');
var chalk = require('chalk');


var FeitGenerator = yeoman.generators.Base.extend({
  init: function () {
    this.pkg = require('../package.json');

    this.on('end', function () {
      if (!this.options['skip-install']) {
        this.installDependencies();
      }
    });
  },

  askFor: function () {
    var done = this.async();

    // Have Yeoman greet the user.
    this.log(yosay('Welcome to the marvelous Feit (Frontend IT Service) generator!'));

    var prompts = [{
      type: 'confirm',
      name: 'frontend',
      message: 'Would you like to install the frontend framework in this folder?',
      default: true
    }];

    this.prompt(prompts, function (props) {
      this.someOption = props.someOption;

      done();
    }.bind(this));
  },

	scaffoldFolders: function(){
	    this.mkdir("app");
	    this.mkdir("app/images");
	    this.mkdir("app/sass");
	    this.mkdir("app/scripts");
	    this.mkdir("app/scripts/controllers");
	    this.mkdir("build");
	},

  app: function () {
    this.copy('_package.json', 'package.json');
    this.copy('_bower.json', 'bower.json');
	this.copy("_gruntfile.js", "Gruntfile.js");
	this.copy("_styles.sass", "app/sass/styles.sass");
	this.copy("_styles.sass", "app/sass/styles.sass");
  },

  projectfiles: function () {
    this.copy('editorconfig', '.editorconfig');
    this.copy('jshintrc', '.jshintrc');
  }
});

module.exports = FeitGenerator;

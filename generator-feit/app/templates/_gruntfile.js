// Generated on 2014-07-25 using generator-FEIT 0.1.0
'use strict';

module.exports = function(grunt) {
	
  // Load grunt tasks automatically
  require('load-grunt-tasks')(grunt);
	
	grunt.initConfig({
	  
		// Compiles Sass to CSS and generates necessary files if requested
	    compass: {
	        prod: {
	            options: {
	               httpPath:"/",
	               sassDir:"app/sass",
	               cssDir:"build/css",
	               outputStyle:"compact",
	               noLineComments:true,
	               relativeAssets:true,
	               raw: "preferred_syntax = :sass\n"
	            }
	        }
	     },		
	});
	
	// Load plugins here
	grunt.loadNpmTasks('grunt-contrib-compass');
	
	// Default task(s).
	grunt.registerTask('default', ['compass']);

};



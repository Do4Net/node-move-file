var program = require('commander'),
	package = require("../package.json"),
	fs = require("fs"),
	path = require("path");

	program
	.version(package.version)
	.option("--mv", "Move files to the destination folder");

	program
	.command('mv <spath> <tpath>')
	.description(' spath:original path;  tpath:target path')
	.action(function(path){ 
		require("../index.js")(spath,tpath);
	});
	program.parse(process.argv);
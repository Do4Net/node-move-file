var program = require('commander'),
	package = require("../package.json"),
	fs = require("fs"),
	path = require("path");

	program
	.version(package.version)
	.option("--fmv", "Move files to the destination folder");

	program
	.command('fmv <spath> <tpath>')
	.description('spath:original path;  tpath:target path')
	.action(function(spath,tpath){ 
		require("../index.js")(spath,tpath);
	});
	program.parse(process.argv);
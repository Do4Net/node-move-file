var fs = require("fs");
var pathMod = require("path");
var mkdirs = require("./lib/mkdirs");
var readfiles = require("./lib/readfiles.js");
var console = require("./lib/console.js");

var sep = pathMod.sep;

function mv(spath,tpath){ 
	readfiles(spath, "", true, function(files){
		files.forEach(function(file){
			fs.readFile(file, function(err, data){
				if(err){
					throw err;
				}
				file = tpath + file.replace(spath,"");
				mkdirs(pathMod.dirname(file), function(){
					fs.writeFile(file, data, function(err){
						if(err){
							throw err;
						}
						console.log(file + "  has move success!");
					});
				});
			});
		});
	}, true);
}
//mv("/Coding/lib-common/node/node-move-file/lib","/Coding/z1000/test");
module.exports = function(spath,tpath){
	if(!spath){
		console.error("原始路径不能为空！");
	}
	if(!tpath){
		console.error("目标路径不能为空！");
	}
	mv(spath,tpath);
};
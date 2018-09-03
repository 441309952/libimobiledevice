
const YAML = require('yamljs')
const childProcess =require('child_process');

exports = module.exports = function( filePath){

	try{

		var command = process.platform !== 'win32'
			? 'export DYLD_LIBRARY_PATH=./lib &&'+'./mac_tools/ideviceinstaller/ideviceinstaller'
 			:  __dirname + '/win_tools/ideviceinstaller.exe';

		var spawn = childProcess.spawn( command , ['-i',filePath] ,{ cwd : __dirname, shell : true });

		return spawn;

	}catch( err){

		return err;
	}

};

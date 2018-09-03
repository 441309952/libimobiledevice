
const YAML = require('yamljs')
const childProcess =require('child_process');

exports = module.exports = function(){

	try{

		var command = process.platform !== 'win32'
			? 'export DYLD_LIBRARY_PATH=./lib &&'+'./mac_tools/libimobiledevice/ideviceinfo'
 			:  __dirname + '/win_tools/ideviceinfo.exe';

		var ideviceinfo = childProcess.execSync( command ,{ cwd : __dirname, encoding : 'utf8' });

		return YAML.parse(ideviceinfo);

	}catch( err){

		return err;
	}

};

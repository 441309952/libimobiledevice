
const YAML = require('yamljs')
const childProcess =require('child_process');

exports = module.exports = function( clientPort , serverPort ){

	if( !clientPort || !serverPort){ return new Error('missing parameter, clientPort || serverPort')};

					var command = process.platform !== 'win32'
						? 'export DYLD_LIBRARY_PATH=./lib && ./mac_tools/usbmuxd/iproxy'
			 			:  __dirname + '/win_tools/iproxy.exe';

					var spawn = childProcess.spawn(command ,[ clientPort, serverPort ],{ cwd : __dirname , shell : true })

					spawn.stderr.on('data', (data) => {
						console.log(`stderr: ${data}`);
					});

					spawn.on('close', (code) => {
					  console.log(`code: ${code}`);
					});

					spawn.on('error', (err , b , c) => {
					  console.log(err , b, c);
					});

			return 'iproxy已开启'

};

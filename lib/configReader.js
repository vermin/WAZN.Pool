/**
 * Cryptonote Node.JS Pool
 * https://github.com/dvandal/cryptonote-nodejs-pool
 *
 * Configuration Reader
 **/

// Load required modules
var fs = require('fs');

// Set pool software version
global.version = "v1.3.5";

/**
 * Load pool configuration
 **/

// Get configuration file path
var configFile = (function(){
    for (var i = 0; i < process.argv.length; i++){
        if (process.argv[i].indexOf('-config=') === 0)
            return process.argv[i].split('=')[1];
    }
    return 'config.json';
})();

// Read configuration file data
try {
    global.config = JSON.parse(fs.readFileSync(configFile));
}
catch(e){
    console.error('Failed to read config file ' + configFile + '\n\n' + e);
    return;
}

/**
 * Developper donation addresses -- thanks for supporting my works!
 **/

var donationAddresses = {
    WAZN: 'WaznsxmBgsEB8D9URhFnZYQnaFAuo9QF16kSGnhDBcbyWtxcDoU6UxLY3wGTsHUEEj8C9ZKHqqmDh5WWpgwjHJHn6krEKtFNqw',
};

global.donations = {};

var percent = config.blockUnlocker.devDonation;
var wallet = donationAddresses[config.symbol];
if (percent && wallet) {
    global.donations[wallet] = percent;
}

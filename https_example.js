var https = require('https');

console.log('did it fam');

var options = {
  host: 'stream-large-file.herokuapp.com',
  path:'/give-me-stuff-now'
};


var callback = function(response) {
  console.log('in response handler callback');
  response.on('data', function(chunk) {
    console.log('[-- CHUNK OF LENGTH '+ chunk.length + '--]');
    console.log(chunk.toString());
  });
  }



console.log('im about to request');

https.request(options, callback).end();

console.log('ive made the request');
var https = require('https');

console.log('did it fam');

var options = {
  host: 'www.example.org',
  path:'/'
};


var callback = function() {
  console.log('in response handler callback');

}

console.log('im about to request');

https.request(options, callback).end();
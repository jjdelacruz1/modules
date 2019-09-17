var os = require('os');

var dns = require('dns');

var w3 = dns.lookup('w3schools.com', function (err, addresses, family) {
  console.log(addresses);
});

console.log(os.freemem());

var tic = setInterval(() => {
  console.log("tic")
}, 1000);

var tock = setInterval(() => {
  console.log("tock")
}, 1000);
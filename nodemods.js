var os = require('os');

var dns = require('dns');

var w3 = dns.lookup('w3schools.com', function (err, addresses, family) {
  console.log(addresses);
});

console.log(os.freemem());

var oneSecond = 1000;

var tic = setInterval(ticTock, oneSecond);

var tic = true

function ticTock () {

  if (tic) {
    console.log("tic")
    tic = false
  } else {
    console.log("tock")
    tic = true
  }
}

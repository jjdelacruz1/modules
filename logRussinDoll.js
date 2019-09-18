var doll = require('./russinaDoll.js')


let count = 0;

function loopDoll(doll) {
  count++;
  console.log(count);

  for (let key in doll) {
    if (key === "value") {
      console.log(doll[key])
    } else if (key === "child" ) {
      // ... do something
      loopDoll(doll[key])
    }
  }
}

loopDoll(doll)
/* eslint-disable linebreak-style */
const FastSpeedtest = require("fast-speedtest-api");

let speedtest = new FastSpeedtest({
  token: "YXNkZmFzZGxmbnNkYWZoYXNkZmhrYWxm", // required
  verbose: true, // default: false
  timeout: 10000, // default: 5000
  https: true, // default: true
  urlCount: 5, // default: 5
  bufferSize: 8, // default: 8
  unit: FastSpeedtest.UNITS.Mbps, // default: Bps
  proxy: 'http://optional:auth@my-proxy:123' // default: undefined
});

/*
speedtest.getSpeed().then(s => {
  console.log(`FAST API Speed: ${s} Mbps`);
}).catch(e => {
  console.error(e.message);
});

*/


function ran() {
  console.log("Hello");
}

//speedtest.getSpeed()

function getInternetSpeed() {
  speedtest.getSpeed().then(s => {
    document.getElementById('speedDisplay').textContent = `Speed: ${s.toFixed(2)} Mbps`;
    //console.log(`FAST API Speed: ${s} Mbps`);
  }).catch(e => {
    document.getElementById('speedDisplay').textContent = 'Error: Unable to retrieve internet speed.';
    //console.error(e.message);
  });
}

window.getInternetSpeed = getInternetSpeed; // JavaScript source code
window.ran = ran;

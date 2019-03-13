// var express = require("express");
// var bodyParser = require("body-parser");
// var app = express();
// const Binance = require('binance-api-node').default

// var client = Binance({
//   apiKey: 'GprnyISJAdbbheLtCMPi8hi2Jl1cz7cpHEv1z5yR0sUIcecCdsyvOECWyzA4UmMK',
//   apiSecret: 'HTMldC7mqVEvrfXfwi8g0tK1p405gOtw4BlE2GQE3xamsd9saEM1FhK8Hxh2HUci',
//   getTime: () => Date.now()

// })

// var time = client.time().then((time)=> {
//   console.log(time);
//   return time;
// })

// module.exports =  client, time;

var Binance = require('binance-api-node').default;

const client = Binance()

const authClient = Binance({
  apiKey: 'GprnyISJAdbbheLtCMPi8hi2Jl1cz7cpHEv1z5yR0sUIcecCdsyvOECWyzA4UmMK', // This will be users data input
  apiSecret: 'HTMldC7mqVEvrfXfwi8g0tK1p405gOtw4BlE2GQE3xamsd9saEM1FhK8Hxh2HUci', // This will be users data input
  getTime: () => Date.now()
})


module.exports = {client, authClient};

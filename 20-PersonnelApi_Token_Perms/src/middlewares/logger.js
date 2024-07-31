"use strict";
/* -------------------------------------------------------
    EXPRESS - Personnel API
------------------------------------------------------- */

const morgan = require("morgan");

// app.use(
//   morgan(
//     'TIME=":date[iso]" - URL=":url" - Method=":method" - IP=":remote-addr" - Ref=":referrer" - Status=":status" - Sign=":user-agent" (:response-time[digits] ms)'
//   )
// );

const fs = require("node:fs");

const now = new Date()
//console.log(now, typeof now)

const today = now.toISOString().split('T')[0]
//console.log(today, typeof today)

// app.use(
//   morgan("combined", {
//     stream: fs.createWriteStream(`./logs/${today}.log`, { flags: "a+" }),
//   })
// );

module.exports = morgan("combined", {
    stream: fs.createWriteStream(`./logs/${today}.log`, { flags: "a+" }),
  })
"use strict";
/* -------------------------------------------------------
    EXPRESS - Personnel API
------------------------------------------------------- */
require("dotenv").config();
const PORT = process.env?.PORT || 8000;
const HOST = process.env?.HOST || "HTTP://127.0.0.1";

const swaggerAutogen = require("swagger-autogen")();

const packageJson = require('./package.json')

const document = {
  info: {
    version: packageJson.version,
    title: packageJson.name,
    description: packageJson.description,
    //termOfService: "http://127.1.0.1:8000/#",
    contact: { name: packageJson.author, email: "omer@omer.com" },
    licence: { name: packageJson.license },
  },
};

const server = require("./api/server");
const express = require("express");
const knex = require("knex");
const dbConfig = require("./knexfile");

const port = 6000;

server.listen(port, () => {
  console.log(`\n* API running on ${port} *\n`);
});
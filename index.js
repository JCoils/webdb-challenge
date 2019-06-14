const server = require("./api/server");


const port = 6000;

server.listen(port, () => {
  console.log(`\n* API running on ${port} *\n`);
});
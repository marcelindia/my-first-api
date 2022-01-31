//brings express into file
const { request, response } = require("express");
const express = require("express");

//build api
const app = express();

app.get("/", (request, response) => {
  response.send("My first Express API....works!");
});

//listens to port 3000----3000 consistently used for express
app.listen(3000, () => console.log("Listening on port 3000..."));

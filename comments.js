// Create web server
// 1. Create a web server
// 2. Create a router
// 3. Create a controller
// 4. Start the server

const express = require("express");
const bodyParser = require("body-parser");
const commentsController = require("./controllers/comments");

const app = express();
app.use(bodyParser.json());

app.get("/comments", commentsController.list);
app.post("/comments", commentsController.create);

app.listen(3000, () => {
  console.log("Server is listening on port 3000");
});
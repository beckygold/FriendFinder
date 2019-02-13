// Require NPM packages Express and Path
const express = require("express");
const path = require("path");

// Set up Express server app and port
const app = express();
const PORT = process.env.PORT || 3000;

// Set up Express to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Routes
require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);

// Server listener
app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);
  });
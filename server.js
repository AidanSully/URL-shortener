// Require
const express = require("express");

// Init
const app = express();

// Path
app.get("/", (req, res) => {
  res.send("Hello World");
});

// Port
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

// Require
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

// Init
const app = express();

// Body-parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// database key
const db = require("./config/keys").mongoURI;

// Connect to MongoDB
mongoose
  .connect(db, { useUnifiedTopology: true, useNewUrlParser: true})
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log(err));

// Path
app.get("/", (req, res) => {
  res.send("Hello World");
});

// Port
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

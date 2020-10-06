// Requires
const mongoose = require("mongoose");
const express = require("express");
const fs = require("fs");

// Models
require("./models/Url");
const Url = mongoose.model("Url");

// copy MongoDB URL
const db = require("./config/keys").mongoURI;

// connect to db
mongoose
  .connect(db, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(console.log("MongoDB connected"))
  .catch((err) => console.log(`Mongoose Connection error ${err.message}`));

// Express app
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

// Create routes
const home = require("./routes/home");
const urls = require("./routes/urls");
app.use("/api", home);
app.use("/api", urls);

const express = require("express");
const router = express.Router();
const Url = require("../models/Url");

router.get("/:route", async (req, res) => {
  const route = req.params.route;
  const instance = await Url.findOne({ id: route });
  if (instance) {
    console.log(instance);
    res.status(200).json({
      message: "Url found",
      data: instance,
    });
  } else {
    console.log("Entry not found");
    res.status(404).json({
      message: "Page not found",
    });
  }
});

router.post("/", async (req, res) => {
  const url = req.body.url;
  const newInstance = new Url({
    url: url,
  });
  short = JSON.stringify(newInstance._id);
  const id = short.slice(short.length - 7, short.length - 1);
  newInstance.id = id;
  const checkInstance = await Url.findOne({ url: newInstance.url });
  if (checkInstance) {
    res.status(200).json({
      message: `${url} found in db`,
      data: checkInstance,
    });
  } else {
    newInstance.save();
    res.status(200).json({
      message: `${url} added to the db`,
      data: newInstance,
    });
  }
});

module.exports = router;

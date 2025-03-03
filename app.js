const express = require("express");
const app = express();

const locationsController = require("./controllers/locations.controller");
app.use("/locations", locationsController);

const machinesController = require("./controllers/machines.controller");
app.use("/machines", machinesController);

const personsController = require("./controllers/persons.controller");
app.use("/persons", personsController);

const specialEventsController = require("./controllers/special-events.controller");
app.use("/special-events", specialEventsController);

const plansController = require("./controllers/plans.controller");
app.use("/plans", plansController);

app.get("/", (req, res) => {
  res.send("Hello, world!");
});

app.get("*", (req, res) => {
  res.status(404).send("Sorry, no page found!");
});

module.exports = app;

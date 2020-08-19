const express = require("express");
const routes = require("./routes");
const auth = require("./config/passport")();
const { handleError } = require("./helpers/errors");

const app = express();

app.use(express.json());
app.use(auth.initialize());

app.use(routes);

app.use(function (err, req, res, next) {
  handleError(err, res);
});

app.listen(3333);

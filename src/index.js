const express = require("express");
const routes = require("./routes");
const auth = require("./config/passport")();
const { handleError } = require("./helpers/errors");
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(auth.initialize());

app.use((req, res, next) => {
  //Qual site tem permissão de realizar a conexão, no exemplo abaixo está o "*" indicando que qualquer site pode fazer a conexão
  res.header("Access-Control-Allow-Origin", "*");
  //Quais são os métodos que a conexão pode realizar na API
  res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
  res.header(
    "Access-Control-Allow-Headers",
    "Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers, Authorization"
  );
  app.use(cors());
  next();
});

app.use(routes);

app.use(function (err, req, res, next) {
  handleError(err, res);
});

app.listen(3333);

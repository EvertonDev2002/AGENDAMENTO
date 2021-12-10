const routes = require("./router/router");
const express = require("express");
const app = express();
const handlebars = require("express-handlebars");
app.engine(
  "handlebars",
  handlebars({
    defaultLayout: "main",
    runtimeOptions: {
      allowProtoPropertiesByDefault: true,
      allowProtoMethodsByDefault: true,
    },
  })
);
app.set("view engine", "handlebars");
app.use(express.urlencoded({ extended: false }));
app.use(routes);
app.listen(process.env.PORT || 3000, () => {
  console.log("Servidor ligado");
});

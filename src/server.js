require("dotenv").config();
const express = require("express");

const configViewEngine = require("./config/viewEngine");
// const connection = require("./config/database");
const webRoutes = require("./routes/web");

const app = express();
const port = process.env.PORT || 8080;
const hostname = process.env.HOST_NAME;

// config template engine
configViewEngine(app);

// set up routers
app.use("/", webRoutes);

app.listen(port, hostname, () => {
  console.log(`Example app listening on port ${port}`);
});

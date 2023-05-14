require("dotenv").config();
const express = require("express");
const configViewEngine = require("./config/viewEngine");
const webRoutes = require("./routes/web");
const mysql = require("mysql2");

const app = express();
const port = process.env.PORT || 8080;
const hostname = process.env.HOST_NAME;

// config template engine
configViewEngine(app);

// set up routers
app.use("/", webRoutes);

// test connection
// create the connection
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  port: 3307,
  database: "vinhdothanh912",
  password: "123456",
});

connection.query("SELECT * FROM Users u", function (err, results, fields) {
  console.log("@@results=", results); // results contains rows returned by server
  console.log("@@fields=", fields); // fields contains extra meta data about results, if available
});

app.listen(port, hostname, () => {
  console.log(`Example app listening on port ${port}`);
});

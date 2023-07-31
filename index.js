const express = require("express");
const uploadRoute = require("./routes/upload");
const { getConnection } = require("./db");

const app = express();

const port = process.env.PORT || 3005;

app.use(uploadRoute);
getConnection();
app.listen(port, () => {
  console.log("Server is up on port " + port);
});

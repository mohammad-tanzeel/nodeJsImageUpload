require("dotenv").config();
const express = require("express");
const passport = require("passport");
const uploadRoute = require("./routes/upload");
const authRoute = require("./routes/auth");
const userRoute = require("./routes/user");
const taskRoute = require("./routes/task");
const bodyParser = require("body-parser");
const cors = require("cors");

require("./middlewares/auth");

const { getConnection } = require("./db");

const app = express();

const port = process.env.PORT || 3005;
// for parsing application/json
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());
app.use(passport.initialize());
require("./middlewares/jwt")(passport);
app.use(uploadRoute);
app.use("/auth", authRoute);
app.use("/user", passport.authenticate("jwt", { session: false }), userRoute);
app.use("/task", taskRoute);

getConnection();

app.listen(port, "172.16.84.9", () => {
  console.log("Server is up on port " + port);
});

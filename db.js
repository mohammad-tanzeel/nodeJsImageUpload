const mongoose = require("mongoose");
// const db = mongoose.connection;

// function connect(MONGO_URL, mongodbOptions = {}) {
//   console.log("mongo connecting...");

//   mongoose
//     .connect(MONGO_URL, mongodbOptions)
//     .catch((err) =>
//       console.error("Mongo error.....", err.toString(), err.code)
//     );
// }

const getConnection = () => {
  mongoose
    .connect("mongodb://localhost:27017/imgUpload")
    .catch((err) =>
      console.error("Mongo error.....", err.toString(), err.code)
    );
};
module.exports = { getConnection };

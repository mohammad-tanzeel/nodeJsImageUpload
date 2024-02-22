const mongoose = require("mongoose");
const getConnection = () => {
try{
  console.log("mongo connecting...");
  mongoose
    .connect("mongodb://0.0.0.0:27017/imgUpload");
  }
    catch(err)  {
      console.error("Mongo error.....", err.toString(), err.code);
      
    }    
};
module.exports = { getConnection };

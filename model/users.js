const mongoose = require("mongoose");
const userSchemaRule = {
  email: {
    type: String,
    require: true,
  },
  password: {
    type: String,
    require: true,
  },
};

const userSchema = new mongoose.Schema(userSchemaRule);

userSchema.methods.generateJWT = function () {
  const today = new Date();
  const expirationDate = new Date(today);
  expirationDate.setDate(today.getDate() + 60);

  let payload = {
    id: this._id,
    email: this.email,
    firstName: this.firstName,
    lastName: this.lastName,
  };

  return jwt.sign(payload, process.env.JWT_SECRET, {
    expiresIn: parseInt(expirationDate.getTime() / 1000, 10),
  });
};

module.exports = mongoose.model("users", userSchema);

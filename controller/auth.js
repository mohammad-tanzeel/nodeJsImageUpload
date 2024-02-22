const usersModel = require("../model/users");
const bcrypt = require("bcryptjs");
const passport = require("passport");
const jwt = require("jsonwebtoken");

module.exports = {
  
  login: async (req, res) => {
    try {
      const { email, password } = req.body;
      const user = await usersModel.findOne({ email });

      if (!user)
        return res.status(401).json({
          msg:
            "The email address " +
            email +
            " is not associated with any account. Double-check your email address and try again.",
        });

      //validate password
      // if (!user.comparePassword(password))
      if (bcrypt.compareSync(password, user.password))
        return res.status(401).json({ message: "Invalid email or password" });

      // Login successful, write token, and send back user
      res.status(200).json({ token: generateJWT(user), user: {id:user._id, email: user.email} });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },
  register: async (req, res) => {
    try {
      debugger;
      const { email } = req.body;

      // Make sure this account doesn't already exist
      const user = await usersModel.findOne({ email });

      if (user)
        return res.status(401).json({
          message:
            "The email address you have entered is already associated with another account.",
        });

      const newUser = new usersModel({ ...req.body, role: "basic" });

      const user_ = await newUser.save();
      res
        .status(200)
        .json({ message: "User Rgistered successfull", userData: user_ });
      // await sendVerificationEmail(user_, req, res);
    } catch (error) {
      res.status(500).json({ success: false, message: error.message });
    }
  },
};

const generateJWT = function (user) {
  const today = new Date();
  const expirationDate = new Date(today);
  expirationDate.setDate(today.getDate() + 60);

  let payload = {
    id: user._id,
    email: user.email,
    // firstName: user.firstName,
    // lastName: user.lastName,
  };

  return jwt.sign(payload, process.env.JWT_SECRET, {
    expiresIn: parseInt(expirationDate.getTime() / 1000, 10),
  });
};

module.exports = {
  profile: (req, res) => {
    try {
      res.status(200).json({
        message: "You made it to the secure route",
        user: req.user,
        token: req.query.secret_token,
      });
    } catch (error) {
      console.log(error.message);
    }
  },
};

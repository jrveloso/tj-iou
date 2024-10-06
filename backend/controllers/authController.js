const User = require("../models/User");

const signUpUser = async (req, res) => {
  console.log("Request Body:", req.body);
  const { username, password } = req.body;
  console.log(username, password);

  try {
    const user = new User({ username: username, password: password });
    await user.save();
    res.status(201).send({ user });
  } catch (err) {
    console.error("Error creating user:", err);
    res
      .status(400)
      .send({ message: "Error creating user", error: err.message });
  }
};

const logInUser = (req, res) => {
  res.send({ user: req.user });
};

const logOutUser = (req, res) => {
    req.logout((err) => {
      if (err) {
        return res.status(500).send({ message: "Logout failed" });
      }
      req.session.destroy((err) => {
        if (err) {
          console.log(
            "Error : Failed to destroy the session during logout.",
            err
          );
          return res.status(500).send({ message: "Failed to destroy session" });
        }
        res.send({ message: "Logged out successfully" });
      });
    });
  }
  
  const checkAuth = (req, res) => {
    if (req.isAuthenticated()) {
      return res.send({ user: req.user });
    }
    res.status(401).send({ message: "Not authenticated" });
  }

module.exports = {signUpUser, logInUser, logOutUser, checkAuth};

const ensureAuth = (req, res) => {
    console.log(req)
    if (req.isAuthenticated()) {
      return res.send({ user: req.user });
    }
    res.status(401).send({ message: "Not authenticated" });
  };
  
  module.exports = { ensureAuth };
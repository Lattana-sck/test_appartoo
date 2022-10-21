const config = require("../config/auth.config");
const db = require("../models");
const User = db.user;

var jwt = require("jsonwebtoken");
var bcrypt = require("bcryptjs");

exports.register = (req, res) => {
  try {
    const user = new User({
      username: req.body.username,
      email: req.body.email,
      password: bcrypt.hashSync(req.body.password, 8),
      role: req.body.role,
    });
    user.save();
    res.status(200).json({ message: "User registered successfully!" });
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

exports.login = (req, res) => {
  User.findOne({
    username: req.body.username,
  }).exec((err, user) => {
    if (err) {
      res.status(500).send({ message: err });
      return;
    }

    if (!user) {
      return res.status(404).send({ message: "User Not found." });
    }

    var passwordIsValid = bcrypt.compareSync(req.body.password, user.password);

    if (!passwordIsValid) {
      return res.status(401).send({ message: "Invalid Password!" });
    }

    const { password, ...others } = user._doc;

    var token = jwt.sign({ others }, config.secret, {
      expiresIn: 86400, // 24 hours
    });

    req.session.token = token;
    res.status(200).send({
      token: token,
    });
  });
};

exports.logout = async (req, res) => {
  try {
    req.session = null;
    res.status(200).send({ message: "You've been signed out!" });
  } catch (err) {
    this.next(err);
  }
};

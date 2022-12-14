const router = require('express').Router();
const db = require('../models');
const User = db.user;
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const { verifySignUp, authJwt } = require("../middlewares");
const controller = require('../controllers/auth.controller')

module.exports = function(app) {
    app.use(function(req, res, next) {
      res.header(
        "Access-Control-Allow-Headers",
        "Origin, Content-Type, Accept"
      );
      next();
    });
  
    app.post("/api/auth/register",verifySignUp.checkDuplicateUsernameOrEmail,controller.register);
    app.post("/api/auth/login", controller.login);
    app.post("/api/auth/logout", controller.logout);
  };

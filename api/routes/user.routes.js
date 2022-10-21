const { authJwt } = require("../middlewares");
const controller = require("../controllers/user.controller");

module.exports = function(app) {
  app.use(function(req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, Content-Type, Accept"
    );
    next();
  });
  
  app.get("/api/user/getUser/:id", [authJwt.verifyToken], controller.getUser)
  app.get("/api/user/getAllUsers", [authJwt.verifyToken], controller.getAllUsers)
  
  app.put("/api/user/:id", [authJwt.verifyToken], controller.update);
  app.delete("/api/user/:id", [authJwt.verifyToken], controller.delete);

  app.post("/api/user/addFriend/:id", [authJwt.verifyToken], controller.addFriend)
  app.post("/api/user/removeFriend/:id", [authJwt.verifyToken], controller.removeFriend)
};
// api routes for passport js
var db = require("../models");
var passport = require("../config/passport");

module.exports = function(app) {
  app.post("/api/signup", function(req, res) {
    db.User.create(req.body)
      .then(function() {
        res.redirect(307, "/api/login");
      })
      .catch(function(err) {
        console.log(err);
        res.json(err);
      });
  });

  //find user if login exists
  app.post("/api/login", passport.authenticate("local"), function(req, res) {
    //redirect them to page..
    res.json("/mainpage");
  });
};

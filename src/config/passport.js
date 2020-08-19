// auth.js
var passport = require("passport");
var passportJWT = require("passport-jwt");
var cfg = require("../config/jwt");
const { User } = require("../app/models");
var ExtractJwt = passportJWT.ExtractJwt;
var Strategy = passportJWT.Strategy;
var params = {
  secretOrKey: cfg.jwtSecret,
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken('jwt')
};

module.exports = function() {
  var strategy = new Strategy(params, function(payload, done) {
    var user = User.findByPk(payload.id) || null;
    if (user) {
      return done(null, {id: user.id});
    } else {
      return done(new Error("User not found"), null);
    }
  });
  passport.use(strategy);
  return {
    initialize: function() {
      return passport.initialize();
    },
    authenticate: function() {
      return passport.authenticate("jwt", cfg.jwtSession);
    }
  };
};
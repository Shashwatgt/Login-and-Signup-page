const jwt = require("jsonwebtoken");
JWT_SECRER = "Shashwat";

const generateToken = (id) => {
  return jwt.sign({ id }, JWT_SECRER, {
    expiresIn: "30d",
  });
};

module.exports = generateToken;

const jwtService = require("jsonwebtoken");
const secret = "yPz2p51Qa2Rf40v4hR0k";

const token = jwtService.sign({}, secret, {
  expiresIn: "1hr",
  algorithm: "HS256",
});

console.log(token);

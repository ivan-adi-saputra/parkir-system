const bcrypt = require("bcryptjs");
const User = require("../../api/v1/user/model");
const jwt = require("jsonwebtoken");

const register = async (req) => {
  const hashedPassword = await bcrypt.hashSync(req.body.password, 10);
  const user = await User.create({
    username: req.body.username,
    email: req.body.email,
    password: hashedPassword,
  });
  return user;
};

const signin = async (req) => {
  const user = await User.findOne({ email: req.body.email });
  if (!user) {
    throw new Error("User not found");
  }
  const isMatch = await bcrypt.compareSync(req.body.password, user.password);
  if (!isMatch) {
    throw new Error("Invalid credentials");
  }
  const token = await jwt.sign({ user }, "secret123", {
    expiresIn: "1h",
  });
  return token;
};

module.exports = {
  register,
  signin,
};

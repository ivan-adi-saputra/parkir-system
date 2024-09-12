const { register, signin } = require("../../../service/mongoose/user");

exports.getAllUsers = (req, res) => {
  res.status(200).json({
    message: "Get all users",
    success: true,
  });
};

exports.register = async (req, res) => {
  try {
    const data = await register(req);

    res.status(201).json({
      message: "Register successful",
      success: true,
      data,
    });
  } catch (error) {
    res.status(500).json({
      message: "Register failed",
      error: error.message,
      success: false,
    });
  }
};

exports.signin = async (req, res) => {
  try {
    const data = await signin(req);

    res.status(201).json({
      message: "Register successful",
      success: true,
      data,
    });
  } catch (error) {
    res.status(500).json({
      message: "Register failed",
      error: error.message,
      success: false,
    });
  }
};

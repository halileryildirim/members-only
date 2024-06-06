const bcrypt = require("bcryptjs");
const asyncHandler = require("express-async-handler");
const { validationResult } = require("express-validator");
const User = require("../models/user");

exports.register = asyncHandler(async (req, res, next) => {
  res.send("Register template");
});

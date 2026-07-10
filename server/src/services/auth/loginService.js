import bcrypt from "bcryptjs";
import validator from "validator";

import User from "../../models/User.js";

const loginService = async ({ email, password }) => {
  if (!email || !password) {
    throw new Error("Email and Password are required");
  }

  if (!validator.isEmail(email)) {
    throw new Error("Invalid Email");
  }

  const user = await User.findOne({
    email: email.toLowerCase(),
  });

  if (!user) {
    throw new Error("Invalid Email or Password");
  }

  const isMatch = await bcrypt.compare(
    password,
    user.password
  );

  if (!isMatch) {
    throw new Error("Invalid Email or Password");
  }

  return user;
};

export default loginService;
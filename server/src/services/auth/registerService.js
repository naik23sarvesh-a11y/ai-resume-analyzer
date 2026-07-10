import bcrypt from "bcryptjs";
import validator from "validator";

import User from "../../models/User.js";

const registerService = async ({ fullName, email, password }) => {
  // Required fields
  if (!fullName || !email || !password) {
    throw new Error("All fields are required");
  }

  // Email validation
  if (!validator.isEmail(email)) {
    throw new Error("Invalid email");
  }

  // Password validation
  if (password.length < 6) {
    throw new Error("Password must be at least 6 characters");
  }

  // Existing user
  const existingUser = await User.findOne({
    email: email.toLowerCase(),
  });

  if (existingUser) {
    throw new Error("Email already exists");
  }

  // Hash password
  const hashedPassword = await bcrypt.hash(password, 12);

  // Create user
  const user = await User.create({
    fullName,
    email: email.toLowerCase(),
    password: hashedPassword,
  });

  return user;
};

export default registerService;
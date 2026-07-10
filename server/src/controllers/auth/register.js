import registerService from "../../services/auth/registerService.js";
import generateToken from "../../utils/generateToken.js";

const register = async (req, res) => {
  try {
    const user = await registerService(req.body);

    const token = generateToken(user._id);

    return res.status(201).json({
      success: true,
      message: "Registration Successful",
      token,
      user: {
        id: user._id,
        fullName: user.fullName,
        email: user.email,
      },
    });
  } catch (error) {
    return res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

export default register;
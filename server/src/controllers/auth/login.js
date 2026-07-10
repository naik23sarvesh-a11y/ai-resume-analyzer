import loginService from "../../services/auth/loginService.js";
import generateToken from "../../utils/generateToken.js";

const login = async (req, res) => {
  try {
    const user = await loginService(req.body);

    const token = generateToken(user._id);

    return res.json({
      success: true,
      message: "Login Successful",
      token,
      user: {
        id: user._id,
        fullName: user.fullName,
        email: user.email,
      },
    });
  } catch (error) {
    return res.status(401).json({
      success: false,
      message: error.message,
    });
  }
};

export default login;
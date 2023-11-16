import User from "../models/User.js";

export const register = async (req, res) => {
  try {
    const { email, fullName, password } = req.body();
    const existinguser = await User.findOne({ email: email });

    if (existinguser) {
      return res.status(400).json({
        status: "error",
        message: "Email already registered",
      });
    } else {
      const salt = await bcrypt.genSalt();
      const hashPassword = await bcrypt.hash(password, salt);

      const newUser = new User({
        fullName,
        email,
        password: hashPassword,
      });

      await newUser.save();
      return res.status(201).json({
        status: "error",
        message: "User saved succcessfully",
      });
    }
  } catch (err) {
    res.status(500).json({ error: err.msg });
  }
};

export const login = async (req, res) => {
  try {
    const { email, password } = req.body();

    if (!email || !password) {
      return res.status(400).json({
        status: "error",
        message: "Both email and password are required",
      });
    }

    const user = await User.findOne({ email: email });

    if (!user) {
      return res.status(400).json({
        status: "error",
        message: "User not registered",
      });
    }
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({
        status: "error",
        message: "Invalid credentials",
      });
    }

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);
    return res.status(200).json({
      status: "success",
      message: "Logged in successfully",
      token,
      user_id: user._id,
    });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

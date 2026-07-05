import { User } from "../models/User.js";
import { genarateJWTToken } from "./genarateJWTToken.js";
import bcrypt from "bcrypt";

export async function login(req, res) {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(400).json({ message: "email and password are required" });
  }
  try {
    const isUserExist = await User.findOne({ email });
    if (!isUserExist) {
      return res.status(404).json({ message: "user not found" });
    }
    try {
      const match = await bcrypt.compare(password, isUserExist.password);
      if (!match) {
        return res.status(400).json({ message: "Incorrect Password" });
      }
    } catch (err) {
      console.log(err.message);
    }
    let userDetails = {
      name: isUserExist.name,
      email: isUserExist.email,
      age: isUserExist.age,
      phone: isUserExist.phone,
      bloodGroup: isUserExist.bloodGroup,
    };
    const token = genarateJWTToken(userDetails);
    res.cookie("token", token, {
      httpOnly: true,
      secure: false,
      sameSite: "lax",
      maxAge: 15 * 60 * 1000,
    });
    return res.status(200).json({ message: "userLoggedIn", token: token });
  } catch (err) {
    console.log(err.message);
  }
}

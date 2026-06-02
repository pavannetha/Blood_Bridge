import { User } from "../models/User.js";
import bcrypt from "bcrypt";

export async function signup(req, res) {
  const body = req.body;
  req.body.password = await bcrypt.hash(req.body.password, 10);
  try {
    const userDetails = await User.create(body);
    console.log(userDetails);
    return res
      .status(201)
      .json({ message: "user created succesfully", userDetails });
  } catch (error) {
    console.log(error.message);
  }
}

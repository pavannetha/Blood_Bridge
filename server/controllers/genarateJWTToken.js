import jwt from "jsonwebtoken";

export function genarateJWTToken(payload) {
  const token = jwt.sign(payload, process.env.JWT_SECRET_JEY, {
    expiresIn: "7d",
  });
  return token;
}

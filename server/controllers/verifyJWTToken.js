import jwt from "jsonwebtoken";

export function verifyJWTToken(req, res) {
  console.log("Cookies:", req.cookies);
  const token = req.cookies.token;
  if (!token) {
    return res.status(401).json({ authenticated: false });
  }
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET_JEY);
    return res.status(200).json({ authenticated: true, user: decoded });
  } catch (err) {
    return res.status(400).json({ authenticated: false });
  }
}

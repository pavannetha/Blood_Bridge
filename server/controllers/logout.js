export function logout(req, res) {
  res.clearCookie("token", {
    httpOnly: true,
    secure: false,
    sameSite: "lax",
    // maxAge: 15 * 60 * 1000,
  });
  res.status(200).json({ message: "logged out successfully" });
}

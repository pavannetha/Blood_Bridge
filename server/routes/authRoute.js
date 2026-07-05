import express from "express";
import { signup } from "../controllers/signup.js";
import { login } from "../controllers/login.js";
import { verifyJWTToken } from "../controllers/verifyJWTToken.js";
import { logout } from "../controllers/logout.js";

const router = express.Router();

router.post("/signup", signup);
router.post("/login", login);
router.post("/logout", logout);
router.get("/checkAuth", verifyJWTToken);

export default router;

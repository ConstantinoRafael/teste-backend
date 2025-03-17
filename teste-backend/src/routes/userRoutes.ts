import express from "express";
import { UserController } from "../controllers/UserController";
import { validateUser } from "../middleware/validateUser";

const router = express.Router();
const userController = new UserController();

router.post("/register", validateUser, userController.register);

export default router;

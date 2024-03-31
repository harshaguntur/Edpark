import express from "express";
import { SignUpController } from "../controller/SignUpController.js";

const SignUpRouter = express.Router();

SignUpRouter.post("", SignUpController);

export default SignUpRouter;

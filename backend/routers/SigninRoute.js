import express from "express";
import { SignInController } from "../controller/SignInController.js";

const SignInRouter = express.Router();

SignInRouter.post("", SignInController);

export default SignInRouter;

import express from "express";
import ConnectDB from "./DB/ConnectDB.js";
import SignUpRouter from "./routers/SignupRoute.js";
import SignInRouter from "./routers/SigninRoute.js";

const app = express();
const port = 3000;

// middleware

app.use(express.json());

//routes

app.use("/api/SignUp", SignUpRouter);
app.use("/api/SignIn", SignInRouter);

//database connection
ConnectDB();

app.listen(port, () => {
  console.log(`server is active on port ${port}`);
});

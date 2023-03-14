import { Application } from "express";
import express from "express";
import authControllers from "../controllers/authControllers";

const router: express.Router = express.Router();
export default function auth(app: Application) {
    router.post("/register", authControllers.register);
    router.post("/login", authControllers.login)
    return app.use("/auth", router);
}
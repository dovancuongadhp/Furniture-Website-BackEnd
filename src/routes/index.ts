import { Application } from "express"
import auth from "./auth";

export default function appRoutes(app:Application){
    auth(app);
}
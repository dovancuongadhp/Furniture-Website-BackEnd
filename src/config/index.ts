import * as dotenv from "dotenv";
import cookieParser from "cookie-parser";
import express, { Application } from "express";
import cors from "cors";
import connectDb from "./connectDb";

export default function appConfig(app: Application) {
  if (process.env.NODE_ENV !== undefined) {
    // if NODE_ENV exists will run the code below
    dotenv.config({ path: `.env.${process.env.NODE_ENV}` });
  }

  //connect to mongodb
  connectDb()

  // default .env for production
  dotenv.config();

  app.use(express.json());

  app.use(express.urlencoded({ extended: true }));

  app.use(cors());

  app.use(cookieParser());
}

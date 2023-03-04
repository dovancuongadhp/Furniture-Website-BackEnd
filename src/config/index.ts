import * as dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import express,{ Application } from 'express';
import cors from 'cors'
export default function appConfig(app : Application){

    dotenv.config();
    
    app.use(express.json());

    app.use(express.urlencoded({ extended: true }));

    app.use(cors());

    app.use(cookieParser());
}
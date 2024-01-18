import { ConnectionToDataBase } from "./dataBase/index";
import express from 'express';
require("dotenv").config()

// const express = require("express");
import bodyParser from "body-parser";
import mongoose from "mongoose";
import crypto from "crypto";
import nodeMailer from "nodemailer";
import cors from "cors";

const app = express();
const port = process.env.PORT || 8000;


app.use(cors());

// app.use(bp.json()) looks at requests where the Content-Type: application/json header is present and transforms the text-based JSON input into JS-accessible variables under req.body. app.use(bp.urlencoded({extended: true}) does the same for URL-encoded requests. the extended: true precises that the req.body object will contain values of any type instead of just strings.

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const jwt = require("jsonwebtoken");



app.listen(port,async()=>{

    try{
        await ConnectionToDataBase
        console.log("connected to db");
        console.log(`server started on Port : ${port}`);
    }
    catch(error){
        console.log(error?.message)
    }
   
})

import express, { Request, Response, NextFunction } from "express";
import dotenv from "dotenv";
import mongoConnect from "./dbConnect";
const app = express();

// Connecting Mongodb
mongoConnect();

app.get("/", (req: Request, res: Response, next: NextFunction) => {
    res.json("Hello World");
});

app.listen(3000, () => {
    console.log("Server started in the port : 3000");
});
import express from "express";
import dotenv from "dotenv";
import helmet from "helmet";
import mongoConnect from "./config/dbConnection";
import { router } from "./routes";
const app = express();

// Connecting Mongodb
mongoConnect();

app.use(helmet());
app.use(router);
app.listen(3000, () => {
    console.log("Server started in the port : 3000");
});
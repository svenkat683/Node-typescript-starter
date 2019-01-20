import express from "express";
import helmet from "helmet";
import bodyParser from "body-parser";
import morgan from "morgan";
import path from "path";
import compression from "compression";
import { ENVIRONMENT } from "../utils/secrets";

import mongoConnect from "../config/dbConnection";
import { router } from "../routes";

// Connecting Mongodb
mongoConnect();

const app = express();

if (ENVIRONMENT !== "production") {
  app.set("port", 3000 || process.env.PORT);
  app.use(morgan("dev"));
}
// setting up middlewares
app.use(helmet());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));
app.use(express.static(path.join(__dirname, "assets"))); // serving static files. it's not good for production.
app.use(router);
app.use(compression());


export = app;

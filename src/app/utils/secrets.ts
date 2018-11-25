import dotenv from "dotenv";
import fs from "fs";

if (fs.existsSync(".env")) {
     const env = dotenv.config({ path: ".env"});
} else {
   const env =  dotenv.config({ path: ".env.example"});
}

export const ENVIRONMENT = process.env.NODE_ENV;

const prod = ENVIRONMENT === "production";

export const MONGODB_URL = prod ? process.env["MONGODB_URL"] : process.env["MONGODB_LOCAL_URL"];



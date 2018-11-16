import mongo, { Mongoose } from "mongoose";
import dotenv from "dotenv";


if (process.env.NODE_ENV !== "production") {
    dotenv.config({path: ".env"});
}


const dbUrl = process.env.MONGO_URL;

function mongoConnect () {
    console.log(dbUrl);
    mongo.connect(dbUrl, { useNewUrlParser: true } ).then(() => {
        console.log("database connected successfully.");
    }).catch( err => console.error(err));
}

export default mongoConnect;
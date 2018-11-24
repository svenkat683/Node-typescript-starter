import mongo from "mongoose";
import dotenv from "dotenv";


if (process.env.NODE_ENV !== "production") {
    dotenv.config();
}
const dbUrl = process.env.MONGODB_LOCAL_URL;

function mongoConnect () {
    console.log(dbUrl);
    mongo.connect(dbUrl, { useNewUrlParser: true } ).then(() => {
        console.log("database connected successfully.");
    }).catch( err => console.error(err));
}

export default mongoConnect;
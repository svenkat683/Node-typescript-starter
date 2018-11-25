import mongo from "mongoose";
import { MONGODB_URL } from "../utils/secrets";

const dbUrl = MONGODB_URL;
function mongoConnect () {
    mongo.connect(dbUrl, { useNewUrlParser: true } ).then(() => {
        console.log("database connected successfully.");
    }).catch( err => console.error(err));
}

export default mongoConnect;
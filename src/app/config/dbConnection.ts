import mongo from "mongoose";
import { MONGODB_URL } from "../utils/secrets";

const dbUrl = MONGODB_URL;
console.log("dbUrl: ", dbUrl);
function mongoConnect () {
    mongo.connect(dbUrl, { useNewUrlParser: true } ).then(() => {
        console.log("database connected successfully.");
    }).catch( err => console.error(err));
}

export default mongoConnect;
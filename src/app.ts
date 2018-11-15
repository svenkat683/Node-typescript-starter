import express, { Request, Response, NextFunction } from "express";
const app = express();

app.get("/", (req: Request, res: Response, next: NextFunction) => {
    res.json("Hello World");
});

app.listen(3000, () => {
    console.log("Server started in the port : 3000");
});
import express, { Request, Response, NextFunction } from "express";

export const router = express.Router();

router.get("/", (req: Request, res: Response, next: NextFunction) => {
    res.json("Hello World");
});

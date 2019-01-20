import app from "./www/app";
import { Request, Response, NextFunction } from "express";
import { HttpError } from "http-errors";
import { ENVIRONMENT } from "./utils/secrets";

// Handle Errors
app.use((req: Request, res: Response, next: NextFunction) => {
    res.status(404).json({
        message: "That route does not exist ☠️",
        status: 404
    });
});


app.use((err: HttpError, req: Request, res: Response, next: NextFunction) => {
    res.status(err.status || 500).json({
        message: err.message || "Something went wrong. Please try again",
        status: err.status || 500
    });
});

if (ENVIRONMENT !== "production") {
    app.listen(app.get("port"), () => {
        console.log(("App is running at %d port in %s mode"), app.get("port"), app.get("env"));
    });
}

export = app;
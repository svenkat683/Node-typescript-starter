import app from "./www/app";
import { Request, Response, NextFunction } from "express";
import errorHandler from "errorhandler";
import notifier from "node-notifier";
import { ENVIRONMENT } from "./utils/secrets";

if (ENVIRONMENT !== "production") {
    app.use(errorHandler({log : errorNotification}));
}

function errorNotification(err: any, str: string, req: Request) {
    const title = "Error in " + req.method + " " + req.url;

    notifier.notify({
      title: title,
      message: str
    });
}

const server = app.listen(app.get("port"), () => {
    console.log("App is running at http://localhost:%d in %s mode" , app.get("port"), app.get("env"));
});

export default server;
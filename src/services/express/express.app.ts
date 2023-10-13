import express, { Application } from "express";
import cors, { CorsOptions } from "cors";
import { index_router, url_router } from "../../routes";

export default async (app: Application) => {
    const cors_options: CorsOptions = {
        origin: "*",
    }

    app.use(cors(cors_options));
    app.use(express.json());

    app.use("vie", express.static(__dirname + "/views"));

    app.use(express.static(__dirname + "/../../../views/"));

    // application routes
    app.use('/', index_router);

    app.use("/r", url_router);
};

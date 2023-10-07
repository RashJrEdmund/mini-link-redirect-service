import express, { Application, Response } from "express";
import cors, { CorsOptions } from "cors";
import { url_router } from "../../routes";
import { FRONT_END_URL } from "../constants";

export default async (app: Application) => {
    const cors_options: CorsOptions = {
        origin: "*",
    }

    app.use(cors(cors_options));
    app.use(express.json());

    app.use("/r", url_router);

    app.get('/', (_, res: Response) => {
        const message = `Hi there, visit ${FRONT_END_URL} to shorten your own links`;
        res.json(message);
    });
};

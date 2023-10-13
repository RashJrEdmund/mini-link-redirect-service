import express, { Response } from "express";

const router = express.Router();

router.get('/', (_, res: Response) => {
    // const message = `Hi there, visit ${FRONT_END_URL} to shorten your own links`;
    // res.json(message);
    res.status(200).sendFile("index.html");
});

export default router;

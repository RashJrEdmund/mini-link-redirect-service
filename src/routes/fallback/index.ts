import express, { Response } from "express";
import { FRONT_END_URL } from "../../services/constants";

const router = express.Router();

router.get('/*', (_, res: Response) => {
    const message = "This is not a valid route";
    res.render("error", { title: "Mini - Link", FRONT_END_URL, message, status: 404, header: "Error" });
});

export default router;

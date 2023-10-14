import express, { Response } from "express";
import { FRONT_END_URL } from "../../services/constants";

const router = express.Router();

router.get('/', (_, res: Response) => {
    res.render("landing", { title: "Mini - Link", FRONT_END_URL });
});

export default router;

import express, { Response } from "express";
import { EPXRESS_URL_CONTROLLER } from "../../modules";
import { FRONT_END_URL } from "../../services/constants";

const router = express.Router();

const url_controller = new EPXRESS_URL_CONTROLLER();

router.get('/', (_, res: Response) => {
    res.render("landing", { title: "Mini - Link", FRONT_END_URL });
});

router.get('/:short_link', url_controller.redirect_to_url.bind(url_controller));

export default router;

import { Request, RequestHandler, Response } from "express"
import EXPRESS_URL_SERVICE from "./url.service";
import { FRONT_END_URL } from "../../services/constants";

export default class EPXRESS_URL_CONTROLLER {
    redirect_to_url: RequestHandler = async (req: Request, res: Response) => {
        const { params } = req;

        try {
            const short_link = params.short_link;

            if (!short_link) return res.json({ message: "NO_URL_FOUND" });

            const { data, status, message } = await EXPRESS_URL_SERVICE.get_by_short_url(short_link);

            if (!data || status !== 200) {
                return res.render("error", { title: "Mini - link", header: "Error", status, message: `${message} 😓`, FRONT_END_URL });
            };

            const original = data.original as string;

            res.redirect(original);

            const new_clicks: number = Number(data.clicks) + 1;

            await EXPRESS_URL_SERVICE.update_clicks(short_link, new_clicks); // getting by short_link instead because getting by _id had an issue. besides, the short links are also unique
        } catch (error) {
            res.json({ message: "AN_ERROR_OCCURED" });
        }
    }
}

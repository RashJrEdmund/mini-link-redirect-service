import EXPRESS_URL_REPO from "./url.repo";
import { get_full_short_url } from "../../services/utils";

type GETBYSHORTURL = (short_link: string) => {
    status: number,
    message: string,
    data: null
}

export default class EXPRESS_URL_SERVICE {
    static get_by_short_url = async (short_link: string) => {
        try {
            const complete_url = get_full_short_url(short_link);

            const url = await EXPRESS_URL_REPO.get_by_short_url(complete_url);

            if (!url) return {
                status: 404,
                message: "NO_URL_FOUND",
                data: null
            };

            return {
                status: 200,
                message: "URL_LOADED",
                data: url,
            }
        } catch {
            return {
                status: 500,
                message: "AN_ERROR_OCCURED",
                data: null
            };
        }
    }

    static update_clicks = async (short_link: string, new_clicks: number) => {
        try {
            const complete_url = get_full_short_url(short_link);
        
            const url = await EXPRESS_URL_REPO.update_clicks(complete_url, new_clicks);

            if (!url) return {
                status: 404,
                message: "NO_URL_FOUND",
                data: null
            };

            return {
                status: 200,
                message: "URL_UPDATED",
                data: null,
            }
        } catch {
            return {
                status: 500,
                message: "AN_ERROR_OCCURED",
                data: null
            };
        }
    }
}

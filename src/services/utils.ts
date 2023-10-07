import { BASE_SHORTEN_URL } from "./constants";

export const get_full_short_url = (short_link: string) => {
    return `${BASE_SHORTEN_URL}/${short_link}`;
}

import { config } from "dotenv";

config({ path: `${__dirname}/../.env` }); // configuring .env to read hear

const MONGO_CONNECT_URL = process.env.MONGO_CONNECT_URL;

const PORT = process.env.PORT || 8000;

const BASE_SHORTEN_URL = process.env.BASE_SHORTEN_URL;

const FRONT_END_URL = process.env.FRONT_END_URL

export {
    MONGO_CONNECT_URL,
    PORT,
    BASE_SHORTEN_URL,
    FRONT_END_URL
};

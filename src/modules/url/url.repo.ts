import { ObjectId } from "mongoose";
import { URL } from "../../schemas";
import { ObjectId as ObjectIdClass } from "mongodb";

export default class EXPRESS_URL_REPO {
    static get_by_short_url = (short_link: string) => {
        return URL.findOne({ short_link });
    }

    static update_clicks = (short_link: string, new_clicks: number) => {
        return URL.findOneAndUpdate({ short_link }, { $set: { clicks: new_clicks } });
    }

    // static update_clicks = (_id: ObjectId, new_clicks: number) => {
    //     return URL.findOne({ _id: new ObjectIdClass("651ec9f00eb1711d3fb5573e") }) // TODO +=> don't know why but getting by _id wasn't return anything. even after trying the new ObjectId() class from MondoDb
    // }
}

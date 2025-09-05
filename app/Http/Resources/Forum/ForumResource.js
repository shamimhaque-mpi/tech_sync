import ResouceCollection from "devlien/resouceCollection";
import collect from "devlien/collect";
import ImageResource from "../ImageResource.js";

export default class ForumResource extends ResouceCollection {

    static namespace = "app/Http/Resources/Forum";

    static collection = false;
    
    async toJson(model){
        return {
            ...collect(model).only('id', 'title', 'description', 'status', 'created_at'),
            ...{images: await new ImageResource(await model.images())}
        }
    }
}
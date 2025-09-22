import ResouceCollection from "devlien/resouceCollection";
import TagListResource from "../Tag/TagListResource.js";
import ImageResource from "../ImageResource.js";
import collect from "devlien/collect";

export default class ForumResource extends ResouceCollection {

    static namespace = "app/Http/Resources/Forum";

    static collection = false;
    
    async toJson(model){
        return {
            ...collect(model).only('id', 'title', 'description', 'status', 'created_at'),
            ...{images: await new ImageResource(await model.images())},
            ...{tags: await new TagListResource(await model.tags())}
        }
    }
}
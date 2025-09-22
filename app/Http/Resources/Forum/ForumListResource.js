import ResouceCollection from "devlien/resouceCollection";
import TagListResource from "../Tag/TagListResource.js";
import ImageResource from "../ImageResource.js";
import collect from "devlien/collect";

export default class ForumListResource extends ResouceCollection {

    static namespace = "app/Http/Resources/Forum";

    static collection = true;
    
    async toJson(model){
        return {
            ...collect(model).only('id', 'title', 'status', 'created_at'),
            ...{images: await new ImageResource(await model.images())},
            ...{tags: await new TagListResource(await model.tags())}
        }
    }
}
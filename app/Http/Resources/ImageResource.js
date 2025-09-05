import ResouceCollection from "devlien/resouceCollection";
import config from "devlien/config";
import path from "path";

export default class ImageResource extends ResouceCollection {

    static namespace = "app/Http/Resources";

    static collection = true;
    
    async toJson(model){
        return {
            name : model.name,
            path : path.join(config('app.url'), (model.path).split('/').slice(1).join('/'))
        };
    }
}
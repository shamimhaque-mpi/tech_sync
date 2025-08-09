import ResouceCollection from "devlien/resouceCollection";
import collect from "devlien/collect";

export default class ForumResource extends ResouceCollection {

    static namespace = "app/Http/Resources/Forum";

    static collection = false;
    
    async toJson(model){
        return collect(model).only('id', 'title', 'description', 'status', 'created_at');
    }
}
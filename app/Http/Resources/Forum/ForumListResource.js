import ResouceCollection from "devlien/resouceCollection";
import collect from "devlien/collect";

export default class ForumListResource extends ResouceCollection {

    static namespace = "app/Http/Resources/Forum";

    static collection = true;
    
    async toJson(model){
        return collect(model).only('id', 'title', 'description', 'status', 'created_at');  
    }
}
import ResouceCollection from "devlien/resouceCollection";
import collect from "devlien/collect";

export default class TagListResource extends ResouceCollection {

    static namespace = "app/Http/Resources/Tag";

    static collection = true;
    
    async toJson(model){
        return collect(model).only('id', 'name');
    }
}
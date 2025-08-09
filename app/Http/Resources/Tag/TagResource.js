import ResouceCollection from "devlien/resouceCollection";
import collect from "devlien/collect";

export default class TagResource extends ResouceCollection {

    static namespace = "app/Http/Resources/Tag";

    static collection = false;
    
    async toJson(model){
        return collect(model).only('id', 'name');
    }
}
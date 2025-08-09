import ResouceCollection from "devlien/resouceCollection";
import collect from "devlien/collect";

export default class RoleResource extends ResouceCollection {

    static namespace = "app/Http/Resources/Role";

    static collection = false;
    
    async toJson(model){
        return collect(model).only('id', 'name', 'slug');
    }
}
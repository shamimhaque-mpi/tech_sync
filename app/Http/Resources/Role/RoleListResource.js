import ResouceCollection from "devlien/resouceCollection";
import collect from "devlien/collect";

export default class RoleListResource extends ResouceCollection {

    static namespace = "app/Http/Resources/Role";

    static collection = true;
    
    async toJson(model){
        return collect(model).only('id', 'name', 'slug');
    }
}
import ResouceCollection from "devlien/resouceCollection";
import RoleListResource from "../Role/RoleListResource.js";
import TagListResource from "../Tag/TagListResource.js";

export default class UserResource extends ResouceCollection {

    static namespace = "app/Http/Resources/User";
    
    static collection = false;

    async toJson(user){
        return {
            id:user.id,
            name: user.name,
            email: user.email,
            username: user.username,
            tags: await new TagListResource(await user.tags()),
            roles: await new RoleListResource(await user.roles()),
        };
    }
}
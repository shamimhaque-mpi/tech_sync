import ResouceCollection from "devlien/resouceCollection";

export default class UserListResource extends ResouceCollection {

    static namespace = "app/Http/Resources/User";

    static collection = true;
    
    async toJson(user){
        return {
            id:user.id,
            name:user.name,
            email:user.email,
            username:user.username
        };
    }
}
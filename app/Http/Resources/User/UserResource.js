import ResouceCollection from "devlien/resouceCollection";

export default class UserResource extends ResouceCollection {

    static namespace = "app/Http/Resources/User";
    
    static collection = false;

    async toJson(user){
        return {
            id:user.id,
            name: user.name,
            email: user.email,
            username: user.username,
            tags: await user.tags(),
        };
    }
}
import Authenticatable from "devlien/model/authenticatable";
import Tag from "./Tag.js";
import Role from "./Role.js";

export default class User extends Authenticatable {

    // The model's application namespace
    static namespace = "app/Models";

    /**
    * The attributes that should be 
    * hidden for arrays and JSON output
    */
    static hidden = ['password'];

    /**
     * Defines a many-to-many relationship between the current model and the Tag model.
     *
     * This method uses the `manyToMany` helper to fetch all related Tag records
     * associated with the current model instance.
     *
     * @returns {Promise<Object<Tag>>} - A promise resolving to an array of Tag model instances.
     *
     */
    async tags(){
        return await this.manyToMany(Tag);
    }


    async roles(){
        return await this.manyToMany(Role);
    }
}
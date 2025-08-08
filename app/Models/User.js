import Model from "devlien/model"
import Tag from "./Tag.js";

export default class User extends Model {

    // The model's application namespace
    static namespace = "app/Models";

    /**
    * The attributes that should be 
    * hidden for arrays and JSON output
    */
    hidden = ['password'];

    
    /**
     * The tags that belong to the post.
     */
    async tags(){
        return await this.manyToMany(Tag);
    }
}
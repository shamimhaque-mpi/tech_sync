import Model from "devlien/model"
import Image from "./Image.js";
import Tag from "./Tag.js";
import Comment from "./Comment.js";

export default class Forum extends Model {

    // The model's application namespace
    static namespace = "app/Models";

    static fillable = ['title', 'creator_id', 'description', 'status'];


    /**
     * Define a polymorphic one-to-many relationship with the Image model.
     * 
     * This allows the current model to have multiple related images
     * through the 'imageable' polymorphic relation.
     *
     * @return MorphMany<promise>
     */
    images(){
        return this.morphMany(Image.class(), 'imageable');
    }

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



    comments(){
        return this.morphMany(Comment.class(), 'commentable');
    }
}
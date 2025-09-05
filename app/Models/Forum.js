import Model from "devlien/model"
import Image from "./Image.js";

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
}
import Model from "devlien/model"

export default class Forum extends Model {

    // The model's application namespace
    static namespace = "app/Models";

    static fillable = ['title', 'creator_id', 'description', 'status'];
}
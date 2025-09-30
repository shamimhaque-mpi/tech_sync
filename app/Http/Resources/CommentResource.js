import ResouceCollection from "devlien/resouceCollection";

export default class CommentResource extends ResouceCollection {

    static namespace = "app/Http/Resources";

    static collection = true;
    
    async toJson(model){
        return {
            id : model.id,
            commentable_id : model.commentable_id,
            parent_id : model.parent_id,
            comment   : model.comment, 
            time : model.created_at
        };
    }
}
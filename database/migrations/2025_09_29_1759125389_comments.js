import Migration from "devlien/migration";

export default class extends Migration {
    up(schema){
        schema.create('comments', (table)=>{
           table.increments('id');
           table.unsignedBigInteger('parent_id').nullable().default(0);
           table.string('comment');
           table.string('commentable_type');
           table.unsignedBigInteger('commentable_id');
           table.timestamps();
        });
    }
    down(schema){
        schema.drop('comments');
    }
}
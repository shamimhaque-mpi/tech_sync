import Migration from "devlien/migration";

export default class extends Migration {
    up(schema){
        schema.create('forum_tags', (table)=>{
           table.increments('id');
           table.unsignedBigInteger('forum_id');
           table.unsignedBigInteger('tag_id');
        });
    }
    down(schema){
        schema.drop('forum_tags');
    }
}
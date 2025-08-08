import Migration from "devlien/migration";

export default class extends Migration {
    up(schema){
        schema.create('user_tags', (table)=>{
           table.increments('id');
           table.unsignedBigInt('user_id');
           table.unsignedBigInt('tag_id');
        });
    }
    down(schema){
        schema.drop('tags');
    }
}
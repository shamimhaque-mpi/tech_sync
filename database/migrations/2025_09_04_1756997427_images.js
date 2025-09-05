import Migration from "devlien/migration";

export default class extends Migration {
    up(schema){
        schema.create('images', (table)=>{
           table.increments('id');
           table.string('name');
           table.string('path');
           table.string('imageable_type');
           table.unsignedBigInteger('imageable_id');
           table.timestamps();
        });
    }
    down(schema){
        schema.drop('images');
    }
}
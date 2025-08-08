import Migration from "devlien/migration";

export default class extends Migration {
    up(schema){
        schema.create('tags', (table)=>{
           table.increments('id');
           table.string('name');
        });
    }
    down(schema){
        schema.drop('tags');
    }
}
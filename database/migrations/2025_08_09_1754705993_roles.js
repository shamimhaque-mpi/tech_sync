import Migration from "devlien/migration";

export default class extends Migration {
    up(schema){
        schema.create('roles', (table)=>{
           table.increments('id');
           table.string('name');
           table.string('slug');
           table.timestamps();
           table.softDeletes();
        });
    }
    down(schema){
        schema.drop('roles');
    }
}
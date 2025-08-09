import Migration from "devlien/migration";

export default class extends Migration {
    up(schema){
        schema.create('user_roles', (table)=>{
           table.increments('id');
           table.unsignedBigInteger('user_id');
           table.unsignedBigInteger('role_id');
        });
    }
    down(schema){
        schema.drop('user_roles');
    }
}
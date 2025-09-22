import Migration from "devlien/migration";

export default class extends Migration {
    up(schema){
        schema.update('users', (table)=>{
           table.string('bio').after('email').nullable();
        });
    }
    down(schema){
        schema.update('users', (table)=>{
            table.drop('bio');
        });
    }
}
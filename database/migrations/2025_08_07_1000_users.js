import Migration from "devlien/migration";

export default class extends Migration {
    up(schema){
        schema.create('users', (table)=>{
           table.increments('id');
           table.string('name');
           table.string('username').unique();
           table.string('email').unique();
           table.text('password');
           table.set('status', ['active', 'inactive']).default('active');
           table.timestamps();
           table.softDeletes();
        });
    }
    down(schema){
        schema.drop('users');
    }
}
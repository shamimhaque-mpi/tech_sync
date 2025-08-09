import Migration from "devlien/migration";

export default class extends Migration {
    up(schema){
        schema.create('forums', (table)=>{
           table.increments('id');
           table.unsignedBigInteger('creator_id');
           table.string('title');
           table.text('description');
           table.set('status', ['pending', 'approved', 'rejected']).default('pending');
           table.timestamps();
           table.softDeletes();
        });
    }
    down(schema){
        schema.drop('forums');
    }
}
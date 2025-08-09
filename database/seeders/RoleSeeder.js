import Role from "../../app/Models/Role.js";
import String from "devlien/string";

export default class RoleSeeder {

    /**
     * Seed the application's database.
     *
     * @return void
     */
    static async run(db){
        for(const record of RoleSeeder.records){
            await Role.updateOrCreate({name:record.name}, {
                name:record.name,
                slug:String(record.name).slug()
            });
        }
    }

    static records = [
        { name: 'Superadmin' },
        { name: 'Admin' },
        { name: 'User' },
    ];
}
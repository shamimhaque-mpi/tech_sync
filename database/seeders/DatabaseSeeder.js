import TagSeeder from "./TagSeeder.js";
import RoleSeeder from "./RoleSeeder.js";
import UserSeeder from "./UserSeeder.js";

export default class DatabaseSeeder {
    /**
     * Seed the application's database.
     *
     * @return void
     */
    static async run(db){
        await TagSeeder.run(db);
        await RoleSeeder.run(db);
        await UserSeeder.run(db);
    }
}
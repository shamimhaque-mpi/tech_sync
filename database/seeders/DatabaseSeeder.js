import TagSeeder from "./TagSeeder.js";
import RoleSeeder from "./RoleSeeder.js";

export default class DatabaseSeeder {
    /**
     * Seed the application's database.
     *
     * @return void
     */
    static async run(db){
        await TagSeeder.run(db);
        await RoleSeeder.run(db);
    }
}
import Hash from "devlien/hash";
import User from "../../app/Models/User.js";

export default class UserSeeder {
    /**
     * Seed the application's database.
     *
     * @return void
     */
    static async run(db){
        for(const record of UserSeeder.records){
            record.password = await Hash.make(record.password);
            const user  = await User.updateOrCreate({username:record.username}, record);
            await (await user.roles()).sync([1,2]);
        }
    }

    static records = [
        { 
            name: 'Shamim Haque',
            username: 'shamim.haque.dev',
            email: 'shamim.haque.dev@gmail.com',
            password: '12345678',
        },
    ];
}
import { fileURLToPath } from 'url';
import Tag from "../../app/Models/Tag.js";

export default class tag {

    /**
     * Seed the application's database.
     *
     * @return void
     */
    static async run(db){
        await Tag.insert([
            {name:'developer'},
            {name:'Softwere Enginer'}
        ]);
    }
}
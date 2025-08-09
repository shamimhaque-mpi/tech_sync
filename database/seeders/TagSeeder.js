import Tag from "../../app/Models/Tag.js";

export default class TagSeeder {

    /**
     * Seed the application's database.
     *
     * @return void
     */
    static async run(db){
        for(const record of TagSeeder.records)
            await Tag.updateOrCreate({name:record.name}, record);
    }

    static records = [
        { name: 'Software Architech' },
        { name: 'Software Engineer' },
        { name: 'Developer' },
        { name: 'Frontend Engineer' },
        { name: 'Backend Developer' },
        { name: 'Full Stack Developer' },
        { name: 'UI/UX Designer' },
        { name: 'DevOps Engineer' },
        { name: 'Data Scientist' },
        { name: 'Project Manager' },
        { name: 'QA Tester' },
    ];

}
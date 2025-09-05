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
        {"name": "Artificial Intelligence"},
        {"name": "Machine Learning"},
        {"name": "Data Science"},
        {"name": "Deep Learning"},
        {"name": "Natural Language Processing"},
        {"name": "Computer Vision"},
        {"name": "Big Data"},
        {"name": "AI Ethics"},

        {"name": "Web Development"},
        {"name": "Mobile Development"},
        {"name": "Game Development"},
        {"name": "Backend Engineering"},
        {"name": "Frontend Frameworks"},
        {"name": "Rust Programming"},
        {"name": "Go Programming"},
        {"name": "Python"},
        {"name": "Dart / Flutter"},
        {"name": "Kotlin / Android"},
        {"name": "Swift / iOS"},
        {"name": "TypeScript / JavaScript"},
        {"name": "C / C++"},
        {"name": "Functional Programming"},

        {"name": "DevOps"},
        {"name": "CI/CD"},
        {"name": "Git & Version Control"},
        {"name": "Docker"},
        {"name": "Kubernetes"},
        {"name": "Cloud Platforms (AWS, Azure, GCP)"},
        {"name": "Serverless Architecture"},
        {"name": "GraphQL"},
        {"name": "PostgreSQL / MySQL"},
        {"name": "NoSQL Databases"},
        {"name": "Edge Computing"},

        {"name": "Cybersecurity"},
        {"name": "Ethical Hacking"},
        {"name": "Penetration Testing"},
        {"name": "Networking"},
        {"name": "System Design"},
        {"name": "Blockchain"},
        {"name": "Web3"},
        {"name": "Smart Contracts"},

        {"name": "Raspberry Pi"},
        {"name": "Arduino"},
        {"name": "Robotics"},
        {"name": "IoT (Internet of Things)"},
        {"name": "Embedded Systems"},
        {"name": "FPGA Development"},
        {"name": "Home Automation"},

        {"name": "Open Source Projects"},
        {"name": "Tech Startups"},
        {"name": "Freelancing"},
        {"name": "Remote Work"},
        {"name": "Developer Productivity"},
        {"name": "Tech Talks"},
        {"name": "Public Speaking"},
        {"name": "Technical Writing"},
        {"name": "UI/UX Design"},
        {"name": "Product Management"},
    ];
}
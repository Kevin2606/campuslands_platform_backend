import connect from '../db/connectDB.js'
const db = (await connect()).db().collection("blogs");

export default class Blog {
    static async getAll() {
        return await db.find({}).toArray();
    }
    static async create(data) {
        console.log(data);
        return await db.insertOne(data);
    }
    static async getOne(title) {
        console.log(title);
        return await db.findOne({ title: title });
    }
}
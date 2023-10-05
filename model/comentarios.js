import connect from "../db/connectDB.js";
const db = (await connect()).db().collection("comentarios");

export default class Blog {
    static async create(data) {
        console.log(data);
        return await db.insertOne(data);
    }
    static async getByIdPadre(idPadre) {
        return await db.find({ id_padre: idPadre }).toArray();
    }
}

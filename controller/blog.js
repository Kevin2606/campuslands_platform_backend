import blogModel from '../model/blog.js'

export default class Comentarios {
    static async getAll(req, res) {
        const result = await blogModel.getAll();
        res.json(result);
    }
    static async create(req, res) {
        console.log(req.body);
        const result = await blogModel.create(req.body);
        res.json(result);
    }
    static async getOne(req, res) {
        const result = await blogModel.getOne(req.params.title);
        res.json(result);
    }
}
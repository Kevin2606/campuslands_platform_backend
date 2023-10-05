import comentariosModel from '../model/comentarios.js'

export default class Comentarios {
    static async create(req, res) {
        const result = await comentariosModel.create(req.body);
        res.json(result);
    }
    static async getByIdPadre(req, res) {
        const { id } = req.params;
        const result = await comentariosModel.getByIdPadre(id);
        res.json(result);
    }
}
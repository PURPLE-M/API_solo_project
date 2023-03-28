const incomeModel = require("./income.model");

module.exports = {
  async get(req, res) {
    const income = await incomeModel.getAll();
    res.send(income);
  },

  async getId(req, res) {
    const id = req.params.id;
    const income = await incomeModel.getId(id);
    res.send(income);
  },

  async create(req, res) {
    const body = req.body;
    const income = await incomeModel.create(body);
    const result = { id: body.id };
    res.send(result);
  },

  async edit(req, res) {
    const id = req.params.id;
    const body = req.body;
    const income = await incomeModel.update(id,body);
    const result = await incomeModel.getId(id);
    res.send(result);
  },


  async delete(req, res) {
    const id = req.params.id;
    const income = await incomeModel.delete(id);
    const result = { id: Number(id) };
    res.send(result)
  },
}
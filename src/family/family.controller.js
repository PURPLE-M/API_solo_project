const familyModel = require("./family.model");

module.exports = {
  async get(req, res) {
    const family = await familyModel.getAll();
    res.send(family);
  },

  async getId(req, res) {
    const id = req.params.id;
    const family = await familyModel.getId(id);
    res.send(family);
  },

  async create(req, res) {
    const body = req.body;
    const family = await familyModel.create(body);
    const result = { id: body.id };
    res.send(result);
  },

  async edit(req, res) {
    const id = req.params.id;
    const body = req.body;
    const family = await familyModel.update(id,body);
    const result = await familyModel.getId(id);
    res.send(result);
  },


  async delete(req, res) {
    const id = req.params.id;
    const family = await familyModel.delete(id);
    const result = { id: Number(id) };
    res.send(result)
  },
}
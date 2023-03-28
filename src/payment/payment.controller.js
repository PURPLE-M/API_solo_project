const paymentModel = require("./payment.model");

module.exports = {
  async get(req, res) {
    const payment = await paymentModel.getAll();
    res.send(payment);
  },

  async getfamilyId(req, res) {
    const id = req.params.familyid;
    const payment = await paymentModel.getfamilyId(id);
    res.send(payment);
  },

  async getId(req, res) {
    const id = req.params.id;
    const payment = await paymentModel.getId(id);
    res.send(payment);
  },

  async create(req, res) {
    const body = req.body;
    const payment = await paymentModel.create(body);
    const result = { id: body.id };
    res.send(result);
  },

  async edit(req, res) {
    const id = req.params.id;
    const body = req.body;
    const payment = await paymentModel.update(id,body);
    //const result = { id: id };
    res.send(payment);
  },


  async delete(req, res) {
    const id = req.params.id;
    const payment = await paymentModel.delete(id);
    const result = { id: Number(id) };
    res.send(result)
  },
}
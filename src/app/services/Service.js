class Service {
  constructor(_model) {
    this.model = _model;
  }
  async index(id) {
    const dataRecord = await this.model.findAll();
    return dataRecord;
  }
  async show(id) {
    const dataRecord = await this.model.findByPk(id);
    return dataRecord;
  }
  async store(data) {
    const dataRecord = await this.model.create(data);
    return dataRecord;
  }
  async update(id, data) {
    const updateRecord = await this.model.findByPk(id);
    const dataRecord = await updateRecord.update(data);
    return dataRecord;
  }
  async destroy(id, data) {
    const destroyRecord = await this.model.findByPk(id);
    const dataRecord = await destroyRecord.destroy(data);
    return dataRecord;
  }
}

module.exports = Service;

import { sequelize } from "../models/init-models";

const findAll = async (req, res) => {
  try {
    const department = await req.context.models.departments.findAll();
    return res.send(department);
  } catch (error) {
    return res.status(400).send(error);
  }
};

const findOne = async (req, res) => {
  try {
    const department = await req.context.models.departments.findOne({
      where: { department_id: req.params.id },
    });
    return res.send(department);
  } catch (error) {
    return res.status(400).send(error);
  }
};

const create = async (req, res) => {
  try {
    const department = await req.context.models.departments.create({
      department_name: req.body.department_name,
      manager_id: req.body.manager_id,
      location_id: req.body.location_id,
    });
    return res.send(department);
  } catch (error) {
    return res.status(400).send(error);
  }
};

const update = async (req, res) => {
  try {
    const department = await req.context.models.departments.update(
      {
        department_name: req.body.department_name,
        manager_id: req.body.manager_id,
        location_id: req.body.location_id,
      },
      { returning: true, where: { department_id: req.params.id } }
    );
    return res.send(department);
  } catch (error) {
    return res.status(400).send(error);
  }
};

const deleted = async (req, res) => {
  try {
    const department = await req.context.models.departments.destroy({
      where: { department_id: req.params.id },
    });
    return res.send(`delete ${department} rows`);
  } catch (error) {
    return res.status(400).send(error);
  }
};

export default {
  findAll,
  findOne,
  create,
  update,
  deleted,
};

import { sequelize } from "../models/init-models";

const findAll = async (req, res) => {
  try {
    const employee = await req.context.models.employees.findAll();
    return res.send(employee);
  } catch (error) {
    return res.status(400).send(error);
  }
};

const findOne = async (req, res) => {
  try {
    const employee = await req.context.models.employees.findOne({
      where: { employee_id: req.params.id },
    });
    return res.send(employee);
  } catch (error) {
    return res.status(400).send(error);
  }
};

const create = async (req, res) => {
  try {
    const employee = await req.context.models.employees.create({
      first_name: req.body.first_name,
      last_name: req.body.last_name,
      email: req.body.email,
      phone_number: req.body.phone_number,
      hire_date: req.body.hire_date,
      salary: req.body.salary,
      commission_pct: req.body.commission_pct,
      job_id: req.body.job_id,
      manager_id: req.body.manager_id,
      department_id: req.body.department_id,
    });
    return res.send(employee);
  } catch (error) {
    return res.status(400).send(error);
  }
};

const update = async (req, res) => {
  try {
    const employee = await req.context.models.employees.update(
      {
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        email: req.body.email,
        phone_number: req.body.phone_number,
        hire_date: req.body.hire_date,
        salary: req.body.salary,
        commission_pct: req.body.commission_pct,
        job_id: req.body.job_id,
        manager_id: req.body.manager_id,
        department_id: req.body.department_id,
      },
      { returning: true, where: { employee_id: req.params.id } }
    );
    return res.send(employee);
  } catch (error) {
    return res.status(400).send(error);
  }
};

const deleted = async (req, res) => {
  try {
    const employee = await req.context.models.employees.destroy({
      where: { employee_id: req.params.id },
    });
    return res.send(`delete ${employee} rows`);
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

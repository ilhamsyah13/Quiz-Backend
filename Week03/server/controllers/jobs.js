import { sequelize } from "../models/init-models";

const findAll = async (req, res) => {
  try {
    const job = await req.context.models.jobs.findAll();
    return res.send(job);
  } catch (error) {
    return res.status(400).send(error);
  }
};

const findOne = async (req, res) => {
  try {
    const job = await req.context.models.jobs.findOne({
      where: { job_id: req.params.id },
    });
    return res.send(job);
  } catch (error) {
    return res.status(400).send(error);
  }
};

const create = async (req, res) => {
  try {
    const job = await req.context.models.jobs.create({
      job_id: req.body.job_id,
      job_title: req.body.job_title,
      min_salary: req.body.min_salary,
      max_salary: req.body.max_salary,
    });
    return res.send(job);
  } catch (error) {
    return res.status(400).send(error);
  }
};

const update = async (req, res) => {
  try {
    const job = await req.context.models.jobs.update(
      {
        job_id: req.body.job_id,
        job_title: req.body.job_title,
        min_salary: req.body.min_salary,
        max_salary: req.body.max_salary,
      },
      { returning: true, where: { job_id: req.params.id } }
    );
    return res.send(job);
  } catch (error) {
    return res.status(400).send(error);
  }
};

const deleted = async (req, res) => {
  try {
    const job = await req.context.models.jobs.destroy({
      where: { job_id: req.params.id },
    });
    return res.send(`delete ${job} rows`);
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

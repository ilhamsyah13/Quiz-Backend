import { sequelize } from "../models/init-models";

const findAll = async (req, res) => {
  try {
    const country = await req.context.models.countries.findAll();
    return res.send(country);
  } catch (error) {
    return res.status(400).send(error);
  }
};

const findOne = async (req, res) => {
  try {
    const country = await req.context.models.countries.findOne({
      where: { country_id: req.params.id },
    });
    return res.send(country);
  } catch (error) {
    return res.status(400).send(error);
  }
};

const create = async (req, res) => {
  try {
    const country = await req.context.models.countries.create({
      country_id: req.body.country_id,
      country_name: req.body.country_name,
      region_id: req.body.region_id,
    });
    return res.send(country);
  } catch (error) {
    return res.status(400).send(error);
  }
};

const update = async (req, res) => {
  try {
    const country = await req.context.models.countries.update(
      {
        country_name: req.body.country_name,
        region_id: req.body.region_id,
      },
      { returning: true, where: { country_id: req.params.id } }
    );
    return res.send(country);
  } catch (error) {
    return res.status(400).send(error);
  }
};

const deleted = async (req, res) => {
  try {
    const country = await req.context.models.countries.destroy({
      where: { country_id: req.params.id },
    });
    return res.send(`delete ${country} rows`);
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

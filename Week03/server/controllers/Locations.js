import { sequelize } from "../models/init-models";

const findAll = async (req, res) => {
  try {
    const location = await req.context.models.locations.findAll();
    return res.send(location);
  } catch (error) {
    return res.status(400).send(error);
  }
};

const findOne = async (req, res) => {
  try {
    const location = await req.context.models.locations.findOne({
      where: { location_id: req.params.id },
    });
    return res.send(location);
  } catch (error) {
    return res.status(400).send(error);
  }
};

const create = async (req, res) => {
  try {
    const location = await req.context.models.locations.create({
      street_address: req.body.street_address,
      postal_code: req.body.postal_code,
      city: req.body.city,
      state_province: req.body.state_province,
      country_id: req.body.country_id,
    });
    return res.send(location);
  } catch (error) {
    return res.status(400).send(error);
  }
};

const update = async (req, res) => {
  try {
    const location = await req.context.models.locations.update(
      {
        street_address: req.body.street_address,
        postal_code: req.body.postal_code,
        city: req.body.city,
        state_province: req.body.state_province,
        country_id: req.body.country_id,
      },
      { returning: true, where: { location_id: req.params.id } }
    );
    return res.send(location);
  } catch (error) {
    return res.status(400).send(error);
  }
};

const deleted = async (req, res) => {
  try {
    const location = await req.context.models.locations.destroy({
      where: { location_id: req.params.id },
    });
    return res.send(`delete ${location} rows`);
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

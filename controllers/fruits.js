const Fruit = require("../models/Fruit");

const index = (req, res) => {
  try {
    const fruits = Fruit.showAll();
    res.status(200).send(fruits);
  } catch (err) {
    res.status(404).send({ error: err });
  }
};

const show = async (req, res) => {
  const name = req.params.name.toLowerCase();

  try {
    const fruit = await Fruit.show(name);
    res.status(200).send(fruit);
  } catch (err) {
    res.status(404).send({ error: err });
  }
};

const create = async (req, res) => {
  const data = req.body;
  try {
    // 1. Call a method from the model
    const newFruit = await Fruit.create(data);

    // 2. Send a respons with a status code and the new elelemtn
    res.status(201).send(newFruit);
  } catch (err) {
    res.status(409).send({ error: err });
  }
};

const update = async (req, res) => {
  const data = req.body;
  const name = req.params.name.toLowerCase();

  try {
    const fruit = await Fruit.show(name);
    const updatedFruit = await fruit.update(data);
    res.status(200).send(updatedFruit);
  } catch (err) {
    res.status(404).send({ error: err });
  }
};

const destroy = async (req, res) => {
  const name = req.params.name.toLowerCase();

  try {
    const fruit = await Fruit.show(name);
    const deletedFruit = await fruit.destroy();
    res.sendStatus(204);
  } catch (err) {
    res.status(404).send({ error: err });
  }
};

module.exports = {
  index,
  show,
  create,
  update,
  destroy,
};

const readTalkers = require('../helpers/readTalkers');
const writeTalkers = require('../helpers/writeTalkers');

module.exports = (req, res) => {
  const { id } = req.params;
  const { name, age, talk } = req.body;

  const talkers = readTalkers();
  const foundTalkerIndex = talkers.findIndex((t) => +(t.id) === +(id));

  talkers.splice(foundTalkerIndex, 1, { id: Number(id), name, age, talk });
  writeTalkers(talkers);

  res.status(200).json({ id: Number(id), name, age, talk });
};
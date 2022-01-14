const readTalkers = require('../helpers/readTalkers');
const writeTalkers = require('../helpers/writeTalkers');

module.exports = (req, res) => {
  const { id } = req.params;

  const talkers = readTalkers();
  const foundTalkerIndex = talkers.findIndex((t) => +(t.id) === +(id));

  talkers.splice(foundTalkerIndex, 1);
  writeTalkers(talkers);

  res.status(204).json({ message: 'ok' });
};
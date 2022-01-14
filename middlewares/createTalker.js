const readTalkers = require('../helpers/readTalkers');
const writeTalkers = require('../helpers/writeTalkers');

module.exports = (req, res) => {
  const { name, age, talk } = req.body;

  const talkers = readTalkers();
  const talkerObj = { id: Number(talkers[talkers.length - 1].id) + 1, name, age, talk };
  writeTalkers([...talkers, talkerObj]);
  res.status(201).json(talkerObj);
};
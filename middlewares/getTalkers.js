const readTalkers = require('../helpers/readTalkers');

module.exports = (req, res) => {
  const talkers = readTalkers();

  return res.status(200).json(talkers);
};
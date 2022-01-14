const readTalkers = require('../helpers/readTalkers');

module.exports = (req, res) => {
  const { id } = req.params;
  const talkers = readTalkers();

  const foundTalker = talkers.find((t) => +t.id === +id);

  if (foundTalker) return res.status(200).json(foundTalker);

  res.status(404).json({ message: 'Pessoa palestrante não encontrada' });
};

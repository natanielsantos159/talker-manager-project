const readTalkers = require('../helpers/readTalkers');

module.exports = (req, res, next) => {
  const { q } = req.query;
  if (!q) return next();
  
  const talkers = readTalkers();
  const foundTalker = talkers.filter((t) => t.name.toLowerCase().includes(q.toLowerCase()));
  if (foundTalker) return res.status(200).json(foundTalker);

  res.status(200).json([]);
};

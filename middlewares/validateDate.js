const isDateValid = (date) => {
  const regex = /^\d{2}\/\d{2}\/\d{4}$/;
  return regex.test(date);
};

module.exports = (req, res, next) => {
  const { talk } = req.body;

  if (!isDateValid(talk.watchedAt)) {
    return res.status(400).json({ message: 'O campo "watchedAt" deve ter o formato "dd/mm/aaaa"' });
  }

  next();
};
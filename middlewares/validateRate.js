module.exports = (req, res, next) => {
  const { talk } = req.body;

  if (!Number.isInteger(Number(talk.rate)) || !(Number(talk.rate) >= 1 && Number(talk.rate) <= 5)) {
    return res.status(400).json({ message: 'O campo "rate" deve ser um inteiro de 1 à 5' });
  }

  next();
};
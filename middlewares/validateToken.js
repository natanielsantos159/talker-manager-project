const isTokenValid = require('../helpers/isTokenValid');

module.exports = (req, res, next) => {
  const { authorization } = req.headers;

  if (!authorization) return res.status(401).json({ message: 'Token não encontrado' });
  if (!isTokenValid(authorization)) {
    return res.status(401).json({ message: 'Token inválido' });
  }

  next();
};
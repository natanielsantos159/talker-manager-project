const existsAndNotEmpty = (key, obj) => (key in obj) && obj[key];

module.exports = (req, res, next) => {
  const { talk } = req.body;

  if (!('talk' in req.body) 
    || !existsAndNotEmpty('watchedAt', talk) 
    || !existsAndNotEmpty('rate', talk)) {
    return res.status(400).json({ 
        message: 'O campo "talk" é obrigatório e "watchedAt" e "rate" não podem ser vazios',
      });
  }
  
  next();
};
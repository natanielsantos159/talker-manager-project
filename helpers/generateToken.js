const generateToken = () => {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  const getRandomNum = (max) => Math.floor(Math.random() * max) + 1;
  const tokenArray = [];
  for (let i = 0; i < 16; i += 1) tokenArray.push(characters[getRandomNum(characters.length)]);
  const token = tokenArray.join('');
  return token;
};

module.exports = generateToken;
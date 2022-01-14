const isTokenValid = (token) => {
  const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
  const numbers = '0123456789';

  const containNumbersAndLetters = token.split().some((char) => letters.includes(char)) 
    && token.split().some((char) => numbers.includes(char));

  return containNumbersAndLetters && token.length <= 16;
};

module.exports = isTokenValid;
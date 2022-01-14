const fs = require('fs');

module.exports = () => {
  const talkersJson = fs.readFileSync('./talker.json', 'utf8');
  const talkers = JSON.parse(talkersJson);

  return talkers;
};
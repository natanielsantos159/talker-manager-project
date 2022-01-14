const fs = require('fs');

module.exports = (req, res) => {
  const talkersJson = fs.readFileSync('./talker.json', 'utf8');
  const talkers = JSON.parse(talkersJson);

  return res.status(200).json(talkers);
};
const fs = require('fs');

module.exports = (data) => {
  fs.writeFileSync('./talker.json', JSON.stringify(data));
};
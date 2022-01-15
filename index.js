const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

const HTTP_OK_STATUS = 200;
const PORT = '3000';

const getTalkers = require('./middlewares/getTalkers');
const getTalkerById = require('./middlewares/getTalkerById');
const validateLogin = require('./middlewares/validateLogin');
const validateToken = require('./middlewares/validateToken');
const validateName = require('./middlewares/validateName');
const validateAge = require('./middlewares/validateAge');
const validateDate = require('./middlewares/validateDate');
const validateRate = require('./middlewares/validateRate');
const validateTalk = require('./middlewares/validateTalk');
const createTalker = require('./middlewares/createTalker');
const editTalker = require('./middlewares/editTalker');
const deleteTalker = require('./middlewares/deleteTalker');
const searchTalker = require('./middlewares/searchTalker');

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (_request, response) => {
  response.status(HTTP_OK_STATUS).send();
});

app.listen(PORT, () => {
  console.log('Online');
});

app.get('/talker', getTalkers);

app.get('/talker/search', validateToken, searchTalker, getTalkers);

app.get('/talker/:id', getTalkerById);

app.post('/login', validateLogin);

app.delete('/talker/:id', validateToken, deleteTalker);

app.use(
  validateToken, 
  validateName, 
  validateAge, 
  validateTalk,
  validateDate, 
  validateRate,
);
  
app.post('/talker', createTalker);

app.put('/talker/:id', editTalker);

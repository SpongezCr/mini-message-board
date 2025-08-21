const { Router } = require('express');

const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date()
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date()
  }
];

const indexRouter = Router();

indexRouter.use('/:messageId', (req, res) => {
  res.render('messageDetails', { message: messages[req.params.messageId] })
})
indexRouter.use('/', (req, res) => res.render('index', { messages }));


const newMessageRouter = Router();

newMessageRouter.get('/', (req, res) => {
  console.log("test");
  res.render('form', {})
})

newMessageRouter.post('/', (req, res) => {
  messages.push({text: req.body.message, user: req.body.author, added: new Date()})
  res.redirect("/")
})

module.exports = { indexRouter, newMessageRouter };
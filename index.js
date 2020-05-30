'use strict';
const Input = require('./lib/input');
const Notes = require('./lib/notes');
const mongoose = require('mongoose');

const MONGODB_URI='mongodb://localhost:27017/myData';


mongoose.connect(MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
// const arg = new Input();

async function finalResult() {
  const arg = new Input();
  // console.log('hi arq',arg);
  const note = new Notes();
  await note.execute(arg);
  
  mongoose.disconnect();
}
// console.log('hello',arg);
finalResult();
// plz check te pull request

'use strict';

// from the export

const Input = require('./lib/input');
const Notes = require('./lib/notes');
const mongoose = require('mongoose');



const myData='mongodb://localhost:27017/Hammad';
// const MONGODB_URI = process.env.MONGODB_URI;
// MONGODB_URI=mongodb://localhost:27017/myData

mongoose.connect(myData, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
console.log('hii index');
const arg = new Input();

async function finalResult() {
  // const arg = new Input();
  const note = new Notes();
  await note.execute(arg);
  mongoose.disconnect();
}
console.log('hello',arg);
finalResult();
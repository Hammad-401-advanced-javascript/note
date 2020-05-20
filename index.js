'use strict';
const Input = require('./lib/input');
const Notes = require('./lib/notes');
const mongoose = require('mongoose');

const MONGODB_URI = process.env.MONGODB_URI;


mongoose.connect(MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

async function finalResult() {
  const arg = new Input();
  const note = new Notes();
  await note.execute(arg);
  mongoose.disconnect();
}

finalResult();
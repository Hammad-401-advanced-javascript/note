'use strict';

// from the export

const Input = require('./lib/input');
const Notes = require('./lib/notes');

// connect with note
const newResult = new Input();
const note = new Notes(newResult);


'use strict';

// new library required
const mongoose = require('mongoose');

const myData = mongoose.Schema({
  text: { type: String, required: true },
  category: { type: String, required: true },
});


module.exports = mongoose.model('notes', myData);
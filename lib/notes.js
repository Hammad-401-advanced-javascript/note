'use strict';

require('dotenv').config();
const mongoose = require('mongoose');
const schemaData = require('../database/notes-schema.js');

mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

class Notes{
  constructor(proc){
    this.execute(proc);
  }

  execute(proc){
    if(proc.method.action === 'add') {
      this.add(proc);
    } 
    else{ console.log(proc.method); }
  }

  add(proc){
    this.text = proc.method.payload;
    this.id = parseInt(Math.random()*1000);
  
    console.log('Note Adding:',this.text,' ','id=',this.id);
    console.log('action:',proc.method.action);}
}


module.exports = Notes;

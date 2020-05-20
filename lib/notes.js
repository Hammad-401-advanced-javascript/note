'use strict';

const datafromschema = require('../models/notes-schema');

class Notes {
  constructor() {

  }

  // write the requirment in the async function
  async execute(proc) {
    if (proc.method.action === 'add') {
      return this.add(proc);
    } if (proc.method.action === 'list') {
      return this.list(proc);
    }
    if (proc.method.action === 'delete') {
      return this.delete(proc);}
  }

  async add(proc) {
    let showData = { text: proc.method.payload, category: proc.method.category };
    
    let newNote = new datafromschema(showData);
    //one of the prperties of ES6 that like .then
    await newNote.save();
  }

  async delete(singleDelete) {
    await datafromschema.findByIdAndRemove(singleDelete.method.id);
  }

  //Add the category

  async list(addCategory) {
    let checkData = addCategory.method.category;
    let data=checkData;
    if(checkData === false){
      await datafromschema.find({});
    }else{
      await datafromschema.find({ category: checkData });
    }   
    this.sendTheResult(data);
  }

  sendTheResult(result) {
    result.forEach(val => {
      console.log(val.text);
      console.log('Category:', val.category, 'id:', val._id);
    });
  }
  


}

module.exports = Notes;

'use strict';

const datafromschema = require('../model/notes-schema');
const dataCollection = require('../model/notes-collection');
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
    let showData = { text: proc.method.payload, category: 'test' };
    console.log('show data',showData);
    console.log('process',proc);
    // let newNote = new datafromschema(showData);
    const colData = await dataCollection.create(showData);
    //one of the prperties of ES6 that like .then
    // await dataCollection.save();
  }

  async delete(singleDelete) {
    await dataCollection.delete(singleDelete.method.id);
  }

  //Add the category

  async list(addCategory) {
    let checkData = addCategory.method.category;
    let data=checkData;
    if(checkData === false){
      // await datafromschema.find({});
      await dataCollection.read();
    }else{
      await dataCollection.read({ category: checkData });
    }   
    this.sendTheResult(data);
  }

  sendTheResult(result) {
    result.forEach(result => {
      console.log(result.text);
      console.log('Category:', result.category, 'id:', result._id);
    });
  }
  

}

module.exports = Notes;

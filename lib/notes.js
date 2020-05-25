'use strict';

// const datafromschema = require('../model/notes-schema');
const dataCollection = require('../model/notes-collection');

const dataCollectionNew = new dataCollection();

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
    console.log('show data',showData);
    console.log('process',proc);
    // let newNote = new datafromschema(showData);
    await dataCollectionNew.create(showData);
    //one of the prperties of ES6 that like .then
    // await dataCollection.save();
  }

  async delete(singleDelete) {
    await dataCollectionNew.delete(singleDelete.method.id);
  }

  //Add the category

  async update(proc){
    let showData={ text: proc.method.payload, id: proc.method.id };
    await dataCollectionNew.update(showData.id,showData.text);
  }

  async list(addCategory) {
    let checkData = addCategory.method.category;
    let data=checkData;
    if(checkData === false){
      // await datafromschema.find({});
      await dataCollectionNew.get(checkData);
    }else{
      await dataCollectionNew.get();
    }   
    this.sendTheResult(data);
  }

  sendTheResult(data) {
   

    if(data.length){
      data.forEach.forEach(element => {
        console.log(element.text);
        console.log('Category:', element.category, 'id:', element._id);
      });
    }else{
      console.log('CANT FIND YOUR DATA');
    }
  }
}
  



module.exports = Notes;

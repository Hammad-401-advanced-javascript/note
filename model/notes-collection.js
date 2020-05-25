'use strict';

// const model=require('./notes-schema.js').model;
const schema = require('./notes-schema');


class Data {
  constructor(){}


  async get(category){
    if(category){
      return await schema.find({'category':category});
    }else{
      return await schema.find({});
    }
  }

  async create(obj) {
    let newData = new schema(obj);
    return await newData.save();
  }
    

 
  async update(_id, obj) {
    return await schema.findByIdAndUpdate(_id, {obj});
  }
  async delete(_id) {
    return schema.findByIdAndDelete(_id);
  }
}


module.exports = Data;

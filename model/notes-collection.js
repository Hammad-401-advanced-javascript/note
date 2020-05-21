'use strict';

const model=require('./notes-schema.js').model;

class Data {
  constructor(){}
  create(obj) {
    const newData = new model(obj);
    return newData.save();
  }
    

  read(_id) {
    if (_id) {
      return model.findOne({ _id });
    } else {
      return model.find({});
    }
  }
  update(_id, obj) {
    return model.findByIdAndUpdate(_id, obj, { new: true });
  }
  delete(_id) {
    return model.findByIdAndDelete(_id);
  }
}


module.exports = new Data();

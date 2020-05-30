
'use strict';

const minimist = require('minimist');



class Input{
  constructor(){
    const args = minimist(process.argv.slice(2));
    this.method = this.getMethod(args);
  }
  
  getMethod(method){
    if (method.a || method.add){
      return this.getNote(method.a || method.add , method.category);
    } if (method.list){
      return { action: 'list', category: method.list };
    } if (method.delete) {
      return { action: 'delete', id: method.delete };}
    if(method.update || method.u){
      // console.log('.m',method.m);
      return this.updNote(method._[0],method.u||method.update);
    }
    else{ return 'Error: plz write your note here'; }
  }
  getNote(showNote ='' ,myCategory){
    if (showNote !== true && showNote !=''){
      return { action: 'add', payload: showNote, category:myCategory };

    } 
    else { 
      return 'Error: plz write your note here';
    }
  }
  
  updNote(showNote='', id){
    console.log('show',showNote);
    if(showNote !== false && showNote!=''){
      return { action: 'update', payload: showNote, id: id }; 
    }else{
      return 'Error: plz write your note here';
    }
  }
  
}
// test the pull req after delete last one
module.exports = Input;



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
      return this.updNote(method.m,method.u||method.update);
    }
    else{ return 'Error: plz write your note here'; }
  }
  getNote(showNote ='' ,myCategory){
    if (showNote === false && showNote != ''){
      return { action: 'add', payload: showNote, category:myCategory };

    } 
    else { 
      return 'Error: plz write your note here';
    }
  }

  updNote(showNote='', id){
    if(showNote !== false && showNote!=''){
      return { action: 'update', payload: showNote, id: id }; 
    }else{
      return 'Error: plz write your note here';
    }
  }
  
}
module.exports = Input;



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
    else{ return 'Error: Write the note that you need to use'; }
  }
  getNote(showNote =''){
    if (showNote === true){
      return 'Error: plz write your note here';
    } 
    else { 
      return { action: 'add', payload: showNote };
    }
  }
  
}
module.exports = Input;


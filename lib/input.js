
'use strict';

const minimist = require('minimist');


// /**
//  *  sample input would be
//  *  node index.js -a Or --add "This is a really cool thing that I wanted to remember for later"
//  *
//  */
class Input{
  constructor(){
    const args = minimist(process.argv.slice(2));
    this.method = this.getMethod(args);
  }
  
  getMethod(method){
    if (method.a || method.add){
      return this.getNote(method.a || method.add);
    } 
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




'use strict';

const minimist = require('minimist');


// /**
//  *  sample input would be
//  *  node index.js -a Or --add "This is a really cool thing that I wanted to remember for later"
//  *
//  */

function Input() {
  const args = minimist(process.argv.slice(2));
  this.method = this.getMethod(args);
}

Input.prototype.getMethod = function (method) {
  if (method.a || method.add){
    return this.getNote(method.a || method.add);
  } 
  else{ return 'Error: Write the note that you need to use'; }
};


Input.prototype.getNote = function (showNote = '') {
  if (showNote === true){
    return 'Error: plz write your note here';
  } 
  else { 
    return { action: 'add', payload: showNote };
  }
};
module.exports = Input;



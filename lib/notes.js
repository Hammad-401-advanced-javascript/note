'use strict';

function Notes(proc) {
  this.execute(proc);
}

Notes.prototype.execute = function(proc){
  if(proc.method.action === 'add') {
    this.add(proc);
  } 
  else{ console.log(proc.method); }
};

Notes.prototype.add = function (proc){
  this.text = proc.method.payload;
  this.id = parseInt(Math.random()*1000);

  console.log('Note Adding:',this.text,' ','id=',this.id);
  console.log('action:',proc.method.action);
};

module.exports = Notes;

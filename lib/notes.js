'use strict';

// it wasnt in class way

class Notes{
  constructor(proc){
    this.execute(proc);
  }

  execute(proc){
    if(proc.method.action === 'add') {
      this.add(proc);
    } 
    else{ console.log(proc.method); }
  }

  add(proc){
    this.text = proc.method.payload;
    this.id = parseInt(Math.random()*1000);
  
    console.log('Note Adding:',this.text,' ','id=',this.id);
    console.log('action:',proc.method.action);}
}


module.exports = Notes;

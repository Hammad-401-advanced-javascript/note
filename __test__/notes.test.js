'use strict';

const Notes = require('../lib/notes.js');

jest.spyOn(global.console, 'log');

describe('Notes Module', ()=> {

  it('execute() not correct', () =>{
    new Notes({method:'Error: Write the note that you need to use'});
    expect(console.log).toHaveBeenCalled();
  });

  it('execute() without showNote', () =>{
    new Notes({method:'Error: Write the note that you need to use'});
    expect(console.log).toHaveBeenCalled();
  });

  it('execute() with Note', () =>{
    new Notes({method:{action: 'add', payload: 'test it'}});
    expect(console.log).toHaveBeenCalled();
  });

});

'use strict';

const Input = require('../lib/input.js');

describe('Input Module', ()=> {

  it('getMethods() with wrong input (when there is no method or invalid)', () =>{
    let options = new Input();
    expect(options.getMethod('')).toEqual('Error: Write the note that you need to use');
    expect(options.getMethod('-b')).toEqual('Error: Write the note that you need to use');
  });

  it('getMethods() the Note not valid but the method is correct', () =>{
    let options = new Input();
    expect(options.getMethod({a:true})).toEqual('Error: write something');
  });

  it('getMethods() i can see the Note and the Method', () =>{
    let options = new Input();
    expect(options.getMethod({a:'test 1'})).toEqual({ action: 'add', payload: 'test 1' });
    expect(options.getMethod({add:'test 2'})).toEqual({ action: 'add', payload: 'test 2' });

  });

  it('getNote() without a note', () =>{
    let options = new Input();
    expect(options.getNote(true)).toEqual('msg error: ops u forget to write msg');
  });

  it('getNote() without a Note', () =>{
    let options = new Input();
    expect(options.getNote()).toEqual('Error : write something here');
  });
  
  it('getNote() correct Note', () =>{
    let options = new Input();
    expect(options.getNote('test 3')).toEqual({ action: 'add', payload: 'test 3' });
  });


});

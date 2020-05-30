'use strict';

const Input = require('../lib/input.js');

describe('Input Module', ()=> {

  it('getMethods() with wrong input (when there is no method or invalid)', () =>{
    let options = new Input();
    expect(options.getMethod('')).toEqual('Error: plz write your note here');
    expect(options.getMethod('-b')).toEqual('Error: plz write your note here');
  });

  

  it('getMethods() i can see the Note and the Method', () =>{
    let options = new Input();
    expect(options.getMethod({a:'test 1'})).toEqual({ action: 'add', payload: 'test 1' });
    expect(options.getMethod({add:'test 2'})).toEqual({ action: 'add', payload: 'test 2' });

  });

 
  
  it('getNote() correct Note', () =>{
    let options = new Input();
    expect(options.getNote('test 3')).toEqual({ action: 'add', payload: 'test 3' });
  });


});

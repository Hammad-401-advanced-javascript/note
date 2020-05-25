'use strict';

require('@code-fellows/supergoose');

const Note = require('../model/notes-collection');
const note = new Note();

describe(' test model working', () => {
  it('can create() a new Note', () => {
    let obj = { text: 'show me the test', category: 'first test' };
    return note.create(obj)
      .then(record => {
        Object.keys(obj).forEach(key => {
          expect(record[key]).toEqual(obj[key]);
        });
      });
  });

  it('can get(category) a note item', () => {
    let obj = { text: 'show me the test', category: 'first test' };
    return note.get(obj.category)
      .then(item => {
        Object.keys(obj).forEach(key => {
          expect(item[0][key]).toEqual(obj[key]);
        });
      });
  });
});

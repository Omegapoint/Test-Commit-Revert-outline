var {Shop, Item} = require('./gilded_rose.js');

test('adds 1 + 2 to equal 3', () => {
    expect(1 + 2).toBe(3);
  });


test('Empty shop should return no items', () => {
   expect(new Shop([]).updateQuality()).toHaveLength(0);
});

test('Shop with one item should return some item', () => {
    expect(new Shop([new Item("name", 1, 2)]).updateQuality()).toHaveLength(1);
});
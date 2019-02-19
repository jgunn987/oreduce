var assert = require('assert');
var reduce = require('./index');

var result = reduce([{
  keyOne: 'keyOne'
}, {
  keyTwo: 2
}, {
  keyThree: {
    subKeyOne: 'subKeyOne',
    subKeyTwo: 12,
    subKeyThree: {}
  }
}, {
  keyFour: 4,
  keyFive: 5
}, {
  keyFour: 'keyFour'
}]);

assert.ok(result.keyOne === 'keyOne', 'keyOne does not exist');
assert.ok(result.keyTwo === 2, 'keyTwo does not exist');
assert.ok(result.keyThree, 'keyThree does not exist');
assert.ok(result.keyThree.subKeyOne === 'subKeyOne', 'keyThree.subKeyOne does not exist');
assert.ok(result.keyThree.subKeyTwo === 12, 'keyThree.subKeyTwo does not exist');
assert.ok(result.keyThree.subKeyThree, 'keyThree.subKeyThree does not exist');
assert.ok(result.keyFour === 'keyFour', 'keyFour does not exist');
assert.ok(result.keyFive === 5, 'keyFive does not exist');

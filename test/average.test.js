const {expect} = require('chai');
const {average} = require('../average');

it('computes average of a list of numbers', () => {
  // floating point numbers cannot be compared for equality,
  // hence allowing a delta tolerance
  expect(average([1, 2, 3, 4])).to.be.approximately(2.5, 0.01);
});

it('reports the average as NaN on an empty list', () => {
  expect(average([])).to.be.NaN;
});

it('ignores NaN in the input', () => {
  expect(average([1, NaN, 2])).to.be.approximately(1.5, 0.01);
});

it('reports the average as NaN on high variance - for a difference in min and max', () => {
  expect(average([-1, 6, 1, 10], 5)).to.be.NaN;
});

it('reports the average as NaN on high variance - for each variance', () => {
  expect(average([0, 4, 5, 13], 0, 2)).to.be.NaN;
});

it('reports the average as NaN on high variance -1) for each variance with no of occurrence', () => {
  expect(average([0, 4, 5, 13], 0, 2, 1)).to.be.NaN;
});

it('reports the average as NaN on high variance -2) for each variance with no of occurrence', () => {
  expect(average([0, 4, 5, 13], 0, 2, 2)).to.be.approximately(5.5, 0.01);
});

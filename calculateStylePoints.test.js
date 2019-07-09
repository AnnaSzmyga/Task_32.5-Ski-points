const assert = require('assert');
const calculateStylePoints = require('./calculateStylePoints');

describe('calculateStylePoints', () => {
    it('should work for more or less than 5 style notes', () => {
        const actual = calculateStylePoints([18.5, 17.0, 18.0]);

        const expected = 0;

        assert.equal(actual, expected);
    });
    it('should work for different style notes', () => {
        const actual = calculateStylePoints([10, 11, 12, 13, 14]);

        const expected = 36;

        assert.equal(actual, expected);
    });
    it('should work for the same style notes', () => {
        const actual = calculateStylePoints([10, 10, 12, 15, 15]);

        const expected = 37;

        assert.equal(actual, expected);
    });
});
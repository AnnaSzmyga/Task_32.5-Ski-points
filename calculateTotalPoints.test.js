const assert = require('assert');
const calculateTotalPoints = require('./calculateTotalPoints');

describe('calculateTotalPoints', () => {
    it('should work if all arguments provided', () => {
        const actual = calculateTotalPoints(227.5, "ski flying", 200, [18.0, 18.5, 17.5, 18.5, 18.5], 8.7, -8.4);

        const expected = 208.3;

        assert.equal(actual, expected);
    });
    it('should work for no gatePoints and windPoints', () => {
        const actual = calculateTotalPoints(227.5, "ski flying", 200, [18.0, 18.5, 17.5, 18.5, 18.5]);

        const expected = 208;

        assert.equal(actual, expected);
    });
});
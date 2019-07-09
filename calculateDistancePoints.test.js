const assert = require('assert');
const calculateDistancePoints = require('./calculateDistancePoints');

describe('calculateDistancePoints', () => {
    describe('hillSize', () => {
        it('should work for normal hill size', () => {
            const actual = calculateDistancePoints(111, "normal", 98);

            const expected = 86;

            assert.equal(actual, expected);
        });
        it('should work for large hill size', () => {
            const actual = calculateDistancePoints(134, "large", 120);

            const expected = 85.2;

            assert.equal(actual, expected);
        });
        it('should work for ski flying hill size', () => {
            const actual = calculateDistancePoints(227.5, "ski flying", 200);

            const expected = 153;

            assert.equal(actual, expected);
        });
        it('should work for uncorrect name of hill size', () => {
            const actual = calculateDistancePoints(227.5, "foo", 200);

            const expected = 0;

            assert.equal(actual, expected);
        });
    });

    describe('kPoint', () => {
        it('should work for small kPoint', () => {
            const actual = calculateDistancePoints(111, "normal", 98);

            const expected = 86;

            assert.equal(actual, expected);
        });
        it('should work for medium kPoint', () => {
            const actual = calculateDistancePoints(134, "large", 120);

            const expected = 85.2;

            assert.equal(actual, expected);
        });
        it('should work for large kPoint', () => {
            const actual = calculateDistancePoints(227.5, "ski flying", 200);

            const expected = 153;

            assert.equal(actual, expected);
        });
        it('should work if player crossed kPoint', () => {
            const actual = calculateDistancePoints(111, "normal", 98);

            const expected = 86;

            assert.equal(actual, expected);
        });
        it('should work if player didnt cross kPoint', () => {
            const actual = calculateDistancePoints(97, "normal", 98);

            const expected = 58;

            assert.equal(actual, expected);
        });
    });
});
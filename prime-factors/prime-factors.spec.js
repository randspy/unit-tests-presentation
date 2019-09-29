const primeFactors = require('./prime-factors');

describe('Prime factors kata', () => {
    it('should calcutate prime factors', () => {
        expect(primeFactors(1)).toEqual([]);
        expect(primeFactors(2)).toEqual([2]);
        expect(primeFactors(3)).toEqual([3]);
        expect(primeFactors(4)).toEqual([2, 2]);
        expect(primeFactors(5)).toEqual([5]);
        expect(primeFactors(6)).toEqual([2,3]);
        expect(primeFactors(7)).toEqual([7]);
        expect(primeFactors(8)).toEqual([2, 2, 2]);
        expect(primeFactors(9)).toEqual([3, 3]);
        expect(primeFactors(2 * 3 * 23 * 199)).toEqual([2, 3, 23, 199]);
    })
})
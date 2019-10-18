import * as fc from 'fast-check';
import {primeFactors} from './prime-factors';

describe('Prime factors kata', () => {
    it('should calcutate prime factors', () => {
        fc.assert(fc.property(fc.integer(1, 2147483647), number => {
            expect(number).toEqual(primeFactors(number).reduce((prev, next) => prev * next, 1));
        }
        ), { numRuns: 2});
    })
})
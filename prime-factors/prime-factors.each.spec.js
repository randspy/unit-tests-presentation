import {primeFactors} from './prime-factors';
import each from 'jest-each';

describe('Prime factors kata', () => {
    each` number | factors
            ${1} | ${[]}
            ${2} | ${[2]}
            ${3} | ${[3]}
            ${4} | ${[2, 2]}
            ${5} | ${[5]}
            ${6} | ${[2, 3]}
            ${7} | ${[7]}
            ${8} | ${[2, 2, 2]}
            ${9} | ${[3, 3]}
            ${2 * 3 * 23 * 199} | ${[2, 3, 23, 199]}
    `.it('$number should be factorize into $factors', ({number, factors}) => {
        expect(primeFactors(number)).toEqual(factors);
    });
})
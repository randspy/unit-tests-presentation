function primeFactors(number) {
    let factors = [];
    for(let divisor = 2; divisor <= number; divisor++) {
        for(;number % divisor === 0; number /= divisor) {
            factors.push(divisor);
        }
    }
    
    return factors;
}

module.exports = primeFactors;
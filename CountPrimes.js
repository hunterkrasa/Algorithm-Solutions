/**
 * @param {number} n
 * @return {number}
 */
var countPrimes = function(n) {
    // go through each individual number up to n 
    var primeCounter = 0;
    for (i = 1; i < n-1; i++) {
        for (m = 1; m < i-1; m++){
          if (i % m != 0) {
              primeCounter++;
              break;
          }
        }
    } return primeCounter;
    // determine if said number is prime
    // if so, add to counter 
};
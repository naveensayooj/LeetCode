/**
 * @param {number} n
 * @return {number}
 */
var subtractProductAndSum = function(n) {
    let product = 1;
    let sum = 0;

    while (n > 0) {
        let digit = n % 10;

        product = product * digit;
        sum = sum + digit;

        n = Math.floor(n / 10);
    }

    return product - sum;
};
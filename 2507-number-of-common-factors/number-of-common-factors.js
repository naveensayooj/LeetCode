/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
function commonFactors(a, b) {
    let count = 0;

    for (let i = 1; i <= Math.min(a, b); i++) {
        if (a % i === 0 && b % i === 0) {
            count++;
        }
    }

    return count;
}